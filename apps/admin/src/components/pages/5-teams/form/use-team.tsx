import { Fetch } from "@/lib/fetcher";
import { Route } from "@/routes/_admin/teams";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type TeamFormValues, teamSchema } from "./team-schema";

interface DataProps {
  message: string;
  data: {
    data: TeamFormValues[];
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
  data: TeamFormValues;
  message: string;
  success: boolean;
}

const useTeam = (teamId?: string) => {
  const navigate = useNavigate({ from: Route.fullPath });
  const route = getRouteApi("/_admin/teams");
  const { page, size, searchIn, searchBy, sortBy, orderBy } = route.useSearch();
  const queryClient = useQueryClient();
  const { data: teamDatas } = useQuery({
    queryKey: ["teams", page, size, searchIn, searchBy, sortBy, orderBy],
    queryFn: () => {
      return Fetch<DataProps>({
        url: `/teams?page=${page}&size=${size}&searchIn=${searchIn}&searchBy=${searchBy}&sortBy=${sortBy}&orderBy=${orderBy}`,
        method: "GET",
      });
    },
    placeholderData: (prev) => prev,
  });
  const { data: teamData } = useQuery({
    queryKey: ["team", teamId],
    enabled: !!teamId,
    queryFn: () => {
      return Fetch<DataProp>({
        url: `/teams/${teamId}`,
        method: "GET",
      });
    },
  });

  const teamForm = useForm<TeamFormValues>({
    resolver: zodResolver(teamSchema),
    defaultValues: {
      fullName: teamData?.data?.fullName || "",
      designation: teamData?.data?.designation || "",
      githubUrl: teamData?.data?.githubUrl || "",
      linkedInUrl: teamData?.data?.linkedInUrl || "",
      experience: teamData?.data?.experience || "",
      image: teamData?.data?.image || "",
    },
  });

  useEffect(() => {
    teamForm.reset({
      fullName: teamData?.data?.fullName || "",
      designation: teamData?.data?.designation || "",
      githubUrl: teamData?.data?.githubUrl || "",
      linkedInUrl: teamData?.data?.linkedInUrl || "",
      experience: teamData?.data?.experience || "",
      image: teamData?.data?.image || "",
    });
  }, [teamData]);

  const createTeam = useMutation({
    mutationFn: async (data: TeamFormValues) => {
      return Fetch({
        url: teamId ? `/teams/${teamId}` : "/teams",
        method: teamId ? "PATCH" : "POST",
        data: data,
      });
    },
    onSuccess: () => {
      const sucessMessage = teamId
        ? "Team updated successfully"
        : "Team created successfully";
      toast.success(sucessMessage);
      queryClient.invalidateQueries({ queryKey: ["teams"] });
      teamForm.reset();
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });
  const deleteTeam = useMutation({
    mutationFn: async (id: string) => {
      return Fetch({
        url: `/teams/${id}`,
        method: "DELETE",
      });
    },
    onSuccess: () => {
      const sucessMessage = "Team deleted successfully";
      toast.success(sucessMessage);
      queryClient.invalidateQueries({ queryKey: ["teams"] });
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
    teamForm,
    teamDatas,
    teamData,
    createTeam,
    deleteTeam,
    handlePageChange,
    handleSizeChange,
  };
};

export default useTeam;
