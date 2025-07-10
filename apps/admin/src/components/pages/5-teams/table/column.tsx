import Mysheet from "@/components/shared/my-sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import TeamForm from "../form/team-form";
import type { TeamFormValues } from "../form/team-schema";
import useTeam from "../form/use-team";

export const teamColumns: ColumnDef<TeamFormValues>[] = [
  {
    accessorKey: "fullName",
    header: "Full Name",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <div>{row.original.fullName}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "designation",
    header: "Designation",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.designation}</div>;
    },
  },
  {
    accessorKey: "experience",
    header: "Experience",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.experience}</div>;
    },
  },
  {
    accessorKey: "githubUrl",
    header: "Github URL",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.githubUrl}</div>;
    },
  },
  {
    accessorKey: "linkedInUrl",
    header: "LinkedIn URL",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.linkedInUrl}</div>;
    },
  },

  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { deleteTeam } = useTeam();
      const [dialogOpen, setDialogOpen] = useState(false);
      return (
        <div className="flex items-center gap-1">
          <Mysheet
            open={dialogOpen}
            setOpen={setDialogOpen}
            openButton={<div className="text-primary cursor-pointer">Edit</div>}
          >
            <div className="p-4">
              <div className="font-bold mb-2">Edit Team</div>
              <TeamForm
                onDialogClose={() => setDialogOpen(false)}
                teamId={row.original.id}
              />
            </div>
          </Mysheet>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="text-destructive cursor-pointer">Delete</div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    deleteTeam.mutate(row.original.id!);
                  }}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
