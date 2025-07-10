import { Fetch } from "@/lib/fetcher";
import { Route } from "@/routes/_admin/foods";
import { BlockNoteEditor } from "@blocknote/core";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type CareerFormValues, careerSchema } from "./career-schema";

interface DataProps {
  message: string;
  data: {
    data: CareerFormValues[];
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
  data: CareerFormValues;
  message: string;
  success: boolean;
}

const editor = BlockNoteEditor.create();

const useCareer = (careerId?: string, isEdit?: boolean) => {
  console.log(careerId, isEdit);
  const navigate = useNavigate({ from: Route.fullPath });
  const route = getRouteApi("/_admin/career");
  const { page, size, searchIn, searchBy, sortBy, orderBy } = route.useSearch();
  const queryClient = useQueryClient();
  const { data: careerDatas } = useQuery({
    queryKey: ["careers", page, size, searchIn, searchBy, sortBy, orderBy],
    queryFn: () => {
      return Fetch<DataProps>({
        url: `/career?page=${page}&size=${size}&searchIn=${searchIn}&searchBy=${searchBy}&sortBy=${sortBy}&orderBy=${orderBy}`,
        method: "GET",
      });
    },
    placeholderData: (prev) => prev,
  });
  const { data: careerData } = useQuery({
    queryKey: ["career", careerId],
    enabled: !!careerId,
    queryFn: () => {
      return Fetch<DataProp>({
        url: `/career/${careerId}`,
        method: "GET",
      });
    },
  });

  const careerForm = useForm<CareerFormValues>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      position: careerData?.data?.position || "",
      description: careerData?.data?.description || "",
      location: careerData?.data?.location || "",
      isRemote: careerData?.data?.isRemote || false,
      isPartTimer: careerData?.data?.isPartTimer || false,
      experience: careerData?.data?.experience || "",
      openQuota: careerData?.data?.openQuota || undefined,
      deadline: careerData?.data?.deadline || "",
      field: careerData?.data?.field || "",
      isActive: careerData?.data?.isActive || false,
    },
  });

  useEffect(() => {
    careerForm.reset({
      position: careerData?.data?.position || "",
      description: careerData?.data?.description || "",
      location: careerData?.data?.location || "",
      field: careerData?.data?.field || "",
      isRemote: careerData?.data?.isRemote || false,
      isPartTimer: careerData?.data?.isPartTimer || false,
      experience: careerData?.data?.experience || "",
      openQuota: careerData?.data?.openQuota || undefined,
      deadline: careerData?.data?.deadline || "",
      isActive: careerData?.data?.isActive || false,
    });
  }, [careerData]);

  useEffect(() => {
    if (careerData?.data?.description) {
      editor
        .tryParseHTMLToBlocks(careerData?.data?.description as string)
        .then((blocks) => {
          careerForm.setValue("description", JSON.stringify(blocks));
        });
    }
  }, [careerData?.data?.description]);

  const createCareer = useMutation({
    mutationFn: async (data: CareerFormValues) => {
      return Fetch({
        url: isEdit ? `/career/${careerId}` : "/career",
        method: isEdit ? "PATCH" : "POST",
        data: data,
      });
    },
    onSuccess: () => {
      const sucessMessage = isEdit
        ? "Career updated successfully"
        : "Career created successfully";
      toast.success(sucessMessage);
      queryClient.invalidateQueries({ queryKey: ["careers"] });
      careerForm.reset();
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });
  const deleteCareer = useMutation({
    mutationFn: async (id: string) => {
      return Fetch({
        url: `/career/${id}`,
        method: "DELETE",
      });
    },
    onSuccess: () => {
      const sucessMessage = "Career deleted successfully";
      toast.success(sucessMessage);
      queryClient.invalidateQueries({ queryKey: ["careers"] });
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
    careerForm,
    careerDatas,
    careerData,
    createCareer,
    deleteCareer,
    handlePageChange,
    handleSizeChange,
  };
};

export default useCareer;
