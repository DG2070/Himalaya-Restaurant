import type { ColumnDef } from "@tanstack/react-table";
import type { FoodGroupFormValues } from "../form/food-group-schema";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import useFoodGroup from "../form/use-food-group";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FoodGroupView from "../view";

export const foodGroupColumns: ColumnDef<FoodGroupFormValues>[] = [
  {
    accessorKey: "name",
    header: "Applicant",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="" alt="applicant" />
            <AvatarFallback>
              {row.original.firstName?.charAt(0)}
              {row.original.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            {row.original.firstName} {row.original.lastName}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return <div className="line-clamp-1 ">{row.original.email}</div>;
    },
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.phoneNumber}</div>;
    },
  },
  {
    accessorKey: "portfolioUrl",
    header: "Portfolio",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.portfolioUrl}</div>;
    },
  },
  {
    accessorKey: "linkedinUrl",
    header: "LinkedIn",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.linkedinUrl}</div>;
    },
  },
  {
    accessorKey: "githubUrl",
    header: "GitHub",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.githubUrl}</div>;
    },
  },
  {
    accessorKey: "currentCompany",
    header: "Current Company",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.currentCompany}</div>;
    },
  },
  {
    accessorKey: "currentRole",
    header: "Current Role",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.currentRole}</div>;
    },
  },
  {
    accessorKey: "expectedSalary",
    header: "Expected Salary",
    cell: ({ row }) => {
      return <div className="line-clamp-2">{row.original.expectedSalary}</div>;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { deleteFoodGroup } = useFoodGroup();
      const [dialogUseOpen, setDialogUseOpen] = useState(false);
      return (
        <div className="flex items-center gap-1">
          <Dialog open={dialogUseOpen} onOpenChange={setDialogUseOpen}>
            <DialogTrigger asChild>
              <div className="text-primary cursor-pointer">View</div>
            </DialogTrigger>
            <DialogContent className="min-w-[40dvw] max-w-[90dvw]">
              <DialogHeader>
                <DialogTitle>FoodGroup Details</DialogTitle>
              </DialogHeader>
              {/* <FoodGroupView
                foodGroup={row.original}
                onClose={() => setDialogUseOpen(false)}
              /> */}
            </DialogContent>
          </Dialog>
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
                    deleteFoodGroup.mutate(row.original.id!);
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
