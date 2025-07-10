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
import ClientForm from "../form/client-form";
import type { ClientFormValues } from "../form/client-schema";
import useClient from "../form/use-client";
import moment from "moment";

export const clientColumns: ColumnDef<ClientFormValues>[] = [
  {
    accessorKey: "title",
    header: "Title",
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
    accessorKey: "link",
    header: "Link",
    cell: ({ row }) => {
      return (
        <div className="line-clamp-2">
          <a href={row.original.link}>{row.original.link}</a>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.category}</div>;
    },
  },
  {
    accessorKey: "client",
    header: "Client",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.client}</div>;
    },
  },
  {
    accessorKey: "timeline",
    header: "Timeline",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.timeline}</div>;
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return (
        <div className="line-clamp-2">
          {moment(row.original.date).format("YYYY/MM/DD")}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { deleteClient } = useClient();
      const [dialogOpen, setDialogOpen] = useState<boolean>(false);
      return (
        <div className="flex items-center gap-1">
          <Mysheet
            open={dialogOpen}
            setOpen={setDialogOpen}
            openButton={<div className="text-primary cursor-pointer">Edit</div>}
          >
            <ClientForm
              onDialogClose={() => setDialogOpen(false)}
              clientId={row.original.id}
            />
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
                    deleteClient.mutate(row.original.id!);
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
