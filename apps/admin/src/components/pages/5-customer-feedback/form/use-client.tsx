import { Fetch } from "@/lib/fetcher";
import { Route } from "@/routes/_admin/customer-feedback";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type ClientFormValues, clientSchema } from "./client-schema";

interface DataProps {
  message: string;
  data: {
    data: ClientFormValues[];
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
  data: ClientFormValues;
  message: string;
  success: boolean;
}

const useClient = (clientId?: string) => {
  const navigate = useNavigate({ from: Route.fullPath });
  const route = getRouteApi("/_admin/client");
  const { page, size, searchIn, searchBy, sortBy, orderBy } = route.useSearch();
  const queryClient = useQueryClient();
  const { data: clientDatas } = useQuery({
    queryKey: ["clients", page, size, searchIn, searchBy, sortBy, orderBy],
    queryFn: () => {
      return Fetch<DataProps>({
        url: `/our-work?page=${page}&size=${size}&searchIn=${searchIn}&searchBy=${searchBy}&sortBy=${sortBy}&orderBy=${orderBy}`,
        method: "GET",
      });
    },
    placeholderData: (prev) => prev,
  });
  const { data: clientData } = useQuery({
    queryKey: ["client", clientId],
    enabled: !!clientId,
    queryFn: () => {
      return Fetch<DataProp>({
        url: `/our-work/${clientId}`,
        method: "GET",
      });
    },
  });

  console.log();

  const clientForm = useForm<ClientFormValues>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      title: clientData?.data?.title || "",
      description: clientData?.data?.description || "",
      link: clientData?.data?.link || "",
      category: clientData?.data?.category || [],
      client: clientData?.data?.client || "",
      timeline: clientData?.data?.timeline || "",
      date: clientData?.data?.date || "",
      image: clientData?.data?.image || "",
    },
  });

  useEffect(() => {
    clientForm.reset({
      title: clientData?.data?.title || "",
      description: clientData?.data?.description || "",
      link: clientData?.data?.link || "",
      category: clientData?.data?.category || [],
      client: clientData?.data?.client || "",
      timeline: clientData?.data?.timeline || "",
      date: clientData?.data?.date || "",

      image: clientData?.data?.image || "",
    });
  }, [clientData]);

  const createClient = useMutation({
    mutationFn: async (data: ClientFormValues) => {
      return Fetch({
        url: clientId ? `/our-work/${clientId}` : "/our-work",
        method: clientId ? "PATCH" : "POST",
        data: data,
      });
    },
    onSuccess: () => {
      const sucessMessage = clientId
        ? "Client updated successfully"
        : "Client created successfully";
      toast.success(sucessMessage);
      queryClient.invalidateQueries({ queryKey: ["clients"] });
      clientForm.reset();
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });
  const deleteClient = useMutation({
    mutationFn: async (id: string) => {
      return Fetch({
        url: `/our-work/${id}`,
        method: "DELETE",
      });
    },
    onSuccess: () => {
      const sucessMessage = "Client deleted successfully";
      toast.success(sucessMessage);
      queryClient.invalidateQueries({ queryKey: ["clients"] });
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
    clientForm,
    clientDatas,
    clientData,
    createClient,
    deleteClient,
    handlePageChange,
    handleSizeChange,
  };
};

export default useClient;
