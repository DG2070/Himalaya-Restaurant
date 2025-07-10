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
import { Link } from "@tanstack/react-router";
import type { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import CareerForm from "../form/career-form";
import type { CareerFormValues } from "../form/career-schema";
import useCareer from "../form/use-career";

export const careerColumns: ColumnDef<CareerFormValues>[] = [
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <div className="line-clamp-1">{row.original.position}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return <div className="line-clamp-1 ">{row.original.description}</div>;
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
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.location}</div>;
    },
  },
  {
    accessorKey: "isRemote",
    header: "Remote",
    cell: ({ row }) => {
      return (
        <div className="line-clamp-2">
          {row.original.isRemote ? "Yes" : "No"}
        </div>
      );
    },
  },
  {
    accessorKey: "isActive",
    header: "Active",
    cell: ({ row }) => {
      return (
        <div className="line-clamp-2">
          {row.original.isActive ? "Yes" : "No"}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { deleteCareer } = useCareer();
      const [dialogOpen, setDialogOpen] = useState(false);
      const [dialogUseOpen, setDialogUseOpen] = useState(false);
      return (
        <div className="flex items-center gap-1">
          <Link
            to={`/career-apllication/$id`}
            params={{ id: row.original.id! }}
          >
            <div className="text-primary cursor-pointer">View</div>
          </Link>
          <Mysheet
            open={dialogUseOpen}
            setOpen={setDialogUseOpen}
            openButton={<div className="text-primary cursor-pointer">Use</div>}
          >
            <div className="p-4">
              <div className="font-bold mb-2">Use as Template</div>
              <CareerForm
                onDialogClose={() => setDialogOpen(false)}
                careerId={row.original.id}
                isEdit={false}
              />
            </div>
          </Mysheet>
          <Mysheet
            open={dialogOpen}
            setOpen={setDialogOpen}
            openButton={<div className="text-primary cursor-pointer">Edit</div>}
          >
            <div className="p-4">
              <div className="font-bold mb-2">Edit</div>
              <CareerForm
                onDialogClose={() => setDialogOpen(false)}
                careerId={row.original.id}
                isEdit={true}
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
                    deleteCareer.mutate(row.original.id!);
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
