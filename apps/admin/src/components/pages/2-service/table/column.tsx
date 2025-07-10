import Mysheet from "@/components/shared/my-sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { useState } from "react";
import ServiceForm from "../form/service-form";
import type { ServiceFormValues } from "../form/service-schema";
import useService from "../form/use-service";

export const serviceColumns: ColumnDef<ServiceFormValues>[] = [
  {
    accessorKey: "title",
    header: "title",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <div>{row.original.title}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.description}</div>;
    },
  },

  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => {
      return <div>{moment(row.original.createdAt).format("YYYY-MM-DD")} </div>;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { deleteService } = useService(row.original.id);
      const [open, setOpen] = useState(false);
      return (
        <div className="flex items-center gap-1">
          <Mysheet
            open={open}
            setOpen={setOpen}
            openButton={<div className="text-primary cursor-pointer">Edit</div>}
          >
            <div className="p-6">
              <div className="text-lg leading-none font-semibold mb-4">
                Update Service
              </div>
              <div>
                <ServiceForm
                  serviceId={row.original.id}
                  onDialogClose={() => setOpen(false)}
                />
              </div>
            </div>
          </Mysheet>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="text-destructive cursor-pointer">Delete</div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    deleteService.mutate(row.original.id!);
                  }}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
