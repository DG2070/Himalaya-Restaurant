import { Fetch } from "@/lib/fetcher";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  type ApplicationFormValues,
  applicationSchema,
} from "./application-schema";
import { Route } from "@/routes/_admin/career-apllication.$id";

interface DataProps {
  message: string;
  data: {
    data: ApplicationFormValues[];
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
  data: ApplicationFormValues;
  message: string;
  success: boolean;
}

const useApplication = (applicationId?: string, careerId?: string) => {
  const navigate = useNavigate({ from: Route.fullPath });
  const route = getRouteApi("/_admin/career-apllication/$id");
  const { page, size, searchIn, searchBy, orderBy, sortBy } = route.useSearch();
  const queryClient = useQueryClient();
  const { data: applicationDatas } = useQuery({
    queryKey: [
      "applications",
      page,
      size,
      searchIn,
      searchBy,
      orderBy,
      sortBy,
      careerId,
    ],
    queryFn: () => {
      return Fetch<DataProps>({
        url: `career/${careerId}/application?page=${page}&size=${size}&searchIn=${searchIn}&searchBy=${searchBy}&orderBy=${orderBy}&sortBy=${sortBy}`,
        method: "GET",
      });
    },
    placeholderData: (prev) => prev,
  });
  const { data: applicationData } = useQuery({
    queryKey: ["application", applicationId],
    enabled: !!applicationId,
    queryFn: () => {
      return Fetch<DataProp>({
        url: `/application/${applicationId}`,
        method: "GET",
      });
    },
  });

  const applicationForm = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      jobId: applicationData?.data?.jobId || "",
      firstName: applicationData?.data?.firstName || "",
      lastName: applicationData?.data?.lastName || "",
      email: applicationData?.data?.email || "",
      phoneNumber: applicationData?.data?.phoneNumber || "",
      resume: applicationData?.data?.resume || "",
      coverLetter: applicationData?.data?.coverLetter || "",
      experience: applicationData?.data?.experience || "",
      currentCompany: applicationData?.data?.currentCompany || "",
      currentRole: applicationData?.data?.currentRole || "",
      expectedSalary: applicationData?.data?.expectedSalary || 0,
      portfolioUrl: applicationData?.data?.portfolioUrl || "",
      linkedinUrl: applicationData?.data?.linkedinUrl || "",
      githubUrl: applicationData?.data?.githubUrl || "",
    },
  });

  useEffect(() => {
    applicationForm.reset({
      jobId: applicationData?.data?.jobId || "",
      firstName: applicationData?.data?.firstName || "",
      lastName: applicationData?.data?.lastName || "",
      email: applicationData?.data?.email || "",
      phoneNumber: applicationData?.data?.phoneNumber || "",
      resume: applicationData?.data?.resume || "",
      coverLetter: applicationData?.data?.coverLetter || "",
      experience: applicationData?.data?.experience || "",
    });
  }, [applicationData]);

  const createApplication = useMutation({
    mutationFn: async (data: ApplicationFormValues) => {
      return Fetch({
        url: applicationId
          ? `/application/${applicationId}`
          : `/career/${data.jobId}/application`,
        method: applicationId ? "PATCH" : "POST",
        data: {
          ...data,
          jobId: undefined,
          expectedSalary: Number(data.expectedSalary),
        },
      });
    },
    onSuccess: () => {
      const sucessMessage = applicationId
        ? "Application updated successfully"
        : "Application created successfully";
      toast.success(sucessMessage);
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      applicationForm.reset();
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });
  const deleteApplication = useMutation({
    mutationFn: async (id: string) => {
      return Fetch({
        url: `/application/${id}`,
        method: "DELETE",
      });
    },
    onSuccess: () => {
      const sucessMessage = "Application deleted successfully";
      toast.success(sucessMessage);
      queryClient.invalidateQueries({ queryKey: ["applications"] });
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
    applicationForm,
    applicationDatas,
    applicationData,
    createApplication,
    deleteApplication,
    handlePageChange,
    handleSizeChange,
  };
};

export default useApplication;
