import { Fetch } from "@/lib/fetcher";
import { Route } from "@/routes/_admin/service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { serviceFormSchema, type ServiceFormValues } from "./service-schema";

interface DataProps {
  message: string;
  data: {
    data: ServiceFormValues[];
    currentPage: number;
    totalPages: number;
    size: number;
    total: number;
    isFirst: boolean;
    isLast: boolean;
  };
  success: boolean;
}
interface DataProp {
  data: ServiceFormValues;
  message: string;
  success: boolean;
}

const useService = (serviceId?: string) => {
  const navigate = useNavigate({ from: Route.fullPath });
  const route = getRouteApi("/_admin/service");
  const { page, size, searchIn, searchBy, sortBy, orderBy } = route.useSearch();
  const queryClient = useQueryClient();
  const { data: serviceDatas } = useQuery({
    queryKey: ["services", page, size, searchIn, searchBy, sortBy, orderBy],
    queryFn: () => {
      return Fetch<DataProps>({
        url: `/services?page=${page}&size=${size}&searchIn=${searchIn}&searchBy=${searchBy}&sortBy=${sortBy}&orderBy=${orderBy}`,
        method: "GET",
      });
    },
    placeholderData: (prev) => prev,
  });
  const { data: serviceData } = useQuery({
    queryKey: ["service", serviceId],
    enabled: !!serviceId,
    queryFn: () => {
      return Fetch<DataProp>({
        url: `/services/${serviceId}`,
        method: "GET",
      });
    },
  });

  const serviceForm = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      title: serviceData?.data?.title || "",
      description: serviceData?.data?.description || "",
      features: serviceData?.data?.features || [],
      serviceImage: serviceData?.data?.serviceImage || "",
    },
  });

  useEffect(() => {
    serviceForm.reset({
      title: serviceData?.data?.title || "",
      description: serviceData?.data?.description || "",
      features: serviceData?.data?.features || [],
      serviceImage: serviceData?.data?.serviceImage || "",
    });
  }, [serviceData]);

  const createService = useMutation({
    mutationFn: async (data: ServiceFormValues) => {
      return Fetch({
        url: serviceId ? `/services/${serviceId}` : "/services",
        method: serviceId ? "PATCH" : "POST",
        data: data,
      });
    },
    onSuccess: () => {
      const sucessMessage = serviceId
        ? "Service updated successfully"
        : "Service created successfully";
      toast.success(sucessMessage);
      queryClient.invalidateQueries({ queryKey: ["services"] });
      serviceForm.reset();
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });
  const deleteService = useMutation({
    mutationFn: async (id: string) => {
      return Fetch({
        url: `/services/${id}`,
        method: "DELETE",
      });
    },
    onSuccess: () => {
      const sucessMessage = "Service deleted successfully";
      toast.success(sucessMessage);
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });
  const handlePageChange = (newPage: number) =>
    navigate({ search: (prev: any) => ({ ...prev, page: newPage }) });

  const handleSizeChange = (newSize: string) =>
    navigate({
      search: (prev: any) => ({ ...prev, size: Number(newSize), page: 1 }),
    });

  return {
    serviceForm,
    serviceDatas,
    serviceData,
    createService,
    deleteService,
    handlePageChange,
    handleSizeChange,
  };
};

export default useService;
