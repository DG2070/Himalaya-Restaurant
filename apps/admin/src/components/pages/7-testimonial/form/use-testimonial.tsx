import { useForm } from "react-hook-form";
import {
  type TestimonialFormValues,
  testimonialSchema,
} from "./testimonial-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fetch } from "@/lib/fetcher";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { Route } from "@/routes/_admin/testimonial";
import { useEffect } from "react";

interface DataProps {
  message: string;
  data: {
    data: TestimonialFormValues[];
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
  data: TestimonialFormValues;
  message: string;
  success: boolean;
}

const useTestimonial = (testimonialId?: string) => {
  const navigate = useNavigate({ from: Route.fullPath });
  const route = getRouteApi("/_admin/testimonial");
  const { page, size } = route.useSearch();
  const queryClient = useQueryClient();
  const { data: testimonialDatas } = useQuery({
    queryKey: ["testimonials", page, size],
    queryFn: () => {
      return Fetch<DataProps>({
        url: `/testimonials?page=${page}&size=${size}`,
        method: "GET",
      });
    },
    placeholderData: (prev) => prev,
  });
  const { data: testimonialData } = useQuery({
    queryKey: ["testimonial", testimonialId],
    enabled: !!testimonialId,
    queryFn: () => {
      return Fetch<DataProp>({
        url: `/testimonials/${testimonialId}`,
        method: "GET",
      });
    },
  });
  useEffect(() => {
    testimonialForm.reset({
      fullName: testimonialData?.data?.fullName || "",
      designation: testimonialData?.data?.designation || "",
      oranization: testimonialData?.data?.oranization || "",
      description: testimonialData?.data?.description || "",
      image: testimonialData?.data?.image || "",
    });
  }, [testimonialData]);

  const testimonialForm = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      fullName: testimonialData?.data?.fullName || "",
      designation: testimonialData?.data?.designation || "",
      oranization: testimonialData?.data?.oranization || "",
      description: testimonialData?.data?.description || "",
      image: testimonialData?.data?.image || "",
    },
  });

  const createTestimonial = useMutation({
    mutationFn: async (data: TestimonialFormValues) => {
      return Fetch({
        url: testimonialId ? `/testimonials/${testimonialId}` : "/testimonials",
        method: testimonialId ? "PATCH" : "POST",
        data: data,
      });
    },
    onSuccess: () => {
      const sucessMessage = testimonialId
        ? "Testimonial updated successfully"
        : "Testimonial created successfully";
      toast.success(sucessMessage);
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
      testimonialForm.reset();
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });
  const deleteTestimonial = useMutation({
    mutationFn: async (id: string) => {
      return Fetch({
        url: `/testimonials/${id}`,
        method: "DELETE",
      });
    },
    onSuccess: () => {
      const sucessMessage = "Testimonial deleted successfully";
      toast.success(sucessMessage);
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
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
    testimonialForm,
    testimonialDatas,
    testimonialData,
    createTestimonial,
    deleteTestimonial,
    handlePageChange,
    handleSizeChange,
  };
};

export default useTestimonial;
