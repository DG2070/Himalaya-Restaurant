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
import TestimonialForm from "../form/testimonial-form";
import type { TestimonialFormValues } from "../form/testimonial-schema";
import useTestimonial from "../form/use-testimonial";

export const testimonialColumns: ColumnDef<TestimonialFormValues>[] = [
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
    accessorKey: "oranization",
    header: "Organization",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.oranization}</div>;
    },
  },

  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const [open, setOpen] = useState<boolean>(false);
      const { deleteTestimonial } = useTestimonial();
      return (
        <div className="flex items-center gap-1">
          <Mysheet
            open={open}
            setOpen={setOpen}
            openButton={<div className="text-primary cursor-pointer">Edit</div>}
          >
            <div className="p-4">
              <div className="font-bold mb-2">Edit Testimonial</div>
              <TestimonialForm
                testimonialId={row.original.id}
                onDialogClose={() => {
                  setOpen(false);
                }}
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
                    deleteTestimonial.mutate(row.original.id!);
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
