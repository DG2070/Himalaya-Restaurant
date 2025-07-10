import { Fetch } from "@/lib/fetcher";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type FoodGroupFormValues, foodGroupSchema } from "./food-group-schema";

interface DataProps {
  message: string;
  data: {
    data: FoodGroupFormValues[];
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
  data: FoodGroupFormValues;
  message: string;
  success: boolean;
}

const useFoodGroup = (foodGroupId?: string) => {
  const navigate = useNavigate();
  const { page, size } = useSearch({ strict: false });
  const queryClient = useQueryClient();
  const { data: foodGroupDatas } = useQuery({
    queryKey: ["foodGroups", page, size],
    queryFn: () => {
      return Fetch<DataProps>({
        url: `/foodGroup?page=${page}&size=${size}`,
        method: "GET",
      });
    },
    placeholderData: (prev) => prev,
  });
  const { data: foodGroupData } = useQuery({
    queryKey: ["foodGroup", foodGroupId],
    enabled: !!foodGroupId,
    queryFn: () => {
      return Fetch<DataProp>({
        url: `/foodGroup/${foodGroupId}`,
        method: "GET",
      });
    },
  });

  const foodGroupForm = useForm<FoodGroupFormValues>({
    resolver: zodResolver(foodGroupSchema),
    defaultValues: {
      jobId: foodGroupData?.data?.jobId || "",
      firstName: foodGroupData?.data?.firstName || "",
      lastName: foodGroupData?.data?.lastName || "",
      email: foodGroupData?.data?.email || "",
      phoneNumber: foodGroupData?.data?.phoneNumber || "",
      resume: foodGroupData?.data?.resume || "",
      coverLetter: foodGroupData?.data?.coverLetter || "",
      experience: foodGroupData?.data?.experience || "",
      currentCompany: foodGroupData?.data?.currentCompany || "",
      currentRole: foodGroupData?.data?.currentRole || "",
      expectedSalary: foodGroupData?.data?.expectedSalary || 0,
      portfolioUrl: foodGroupData?.data?.portfolioUrl || "",
      linkedinUrl: foodGroupData?.data?.linkedinUrl || "",
      githubUrl: foodGroupData?.data?.githubUrl || "",
    },
  });

  useEffect(() => {
    foodGroupForm.reset({
      jobId: foodGroupData?.data?.jobId || "",
      firstName: foodGroupData?.data?.firstName || "",
      lastName: foodGroupData?.data?.lastName || "",
      email: foodGroupData?.data?.email || "",
      phoneNumber: foodGroupData?.data?.phoneNumber || "",
      resume: foodGroupData?.data?.resume || "",
      coverLetter: foodGroupData?.data?.coverLetter || "",
      experience: foodGroupData?.data?.experience || "",
    });
  }, [foodGroupData]);

  const createFoodGroup = useMutation({
    mutationFn: async (data: FoodGroupFormValues) => {
      return Fetch({
        url: foodGroupId
          ? `/foodGroup/${foodGroupId}`
          : `/career/${data.jobId}/foodGroup`,
        method: foodGroupId ? "PATCH" : "POST",
        data: {
          ...data,
          jobId: undefined,
          expectedSalary: Number(data.expectedSalary),
        },
      });
    },
    onSuccess: () => {
      const sucessMessage = foodGroupId
        ? "FoodGroup updated successfully"
        : "FoodGroup created successfully";
      toast.success(sucessMessage);
      queryClient.invalidateQueries({ queryKey: ["foodGroups"] });
      foodGroupForm.reset();
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });
  const deleteFoodGroup = useMutation({
    mutationFn: async (id: string) => {
      return Fetch({
        url: `/foodGroup/${id}`,
        method: "DELETE",
      });
    },
    onSuccess: () => {
      const sucessMessage = "FoodGroup deleted successfully";
      toast.success(sucessMessage);
      queryClient.invalidateQueries({ queryKey: ["foodGroups"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });
  const handlePageChange = (newPage: number) =>
    navigate({ search: (prev: any) => ({ ...prev, page: newPage }) } as never);

  const handleSizeChange = (newSize: string) =>
    navigate({
      search: (prev: any) =>
        ({ ...prev, size: Number(newSize), page: 1 }) as never,
    });

  return {
    foodGroupForm,
    foodGroupDatas,
    foodGroupData,
    createFoodGroup,
    deleteFoodGroup,
    handlePageChange,
    handleSizeChange,
  };
};

export default useFoodGroup;
