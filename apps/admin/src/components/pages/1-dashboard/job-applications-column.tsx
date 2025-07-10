import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ColumnDef } from "@tanstack/react-table";
import { FileIcon } from "lucide-react";
import moment from "moment";

export type Applications = {
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  resume: string;
  portfolioUrl: string;
  linkedinUrl: string;
  coverLetter: string;
  experience: string;
  githubUrl: string;
  currentCompany: string;
  currentRole: string;
  createdAt: string;
  expectedSalary: string;
};

export const jobColumns: ColumnDef<Applications>[] = [
  {
    accessorKey: "name",
    header: "Applicants",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="" alt="applicants" />
            <AvatarFallback>
              {row.original.firstName?.charAt(0)}
              {row.original.lastName.charAt(0)}
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
      return <div>{row.original.email}</div>;
    },
  },
  {
    accessorKey: "experience",
    header: "Experience",
    cell: ({ row }) => {
      return <div>{row.original.experience} years</div>;
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
      const documents = [
        { name: "Cover Letter.pdf", path: row.original.coverLetter },
        { name: "Resume.pdf", path: row.original.resume },
        { name: "Certifications.pdf", path: "" },
      ];
      return (
        <div className="">
          <Dialog>
            <DialogTrigger>View Details</DialogTrigger>
            <DialogContent className="min-w-3xl p-0 overflow-hidden">
              <DialogHeader className="p-6 pb-2">
                <DialogTitle className="text-2xl font-bold text-primary">
                  Application Details
                </DialogTitle>
              </DialogHeader>

              <div className="p-6">
                {/* Applicant Profile */}
                <div className="flex items-center mb-8">
                  <Avatar className="h-16 w-16 mr-4">
                    <AvatarImage
                      src=""
                      alt={`${row.original.firstName} ${row.original.lastName}`}
                    />
                    <AvatarFallback className="text-lg">
                      {row.original.firstName?.charAt(0)}
                      {row.original.lastName?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold text-primary">
                      {row.original.firstName} {row.original.lastName}
                    </h2>
                    <p className="text-gray-600">
                      {row.original.currentRole || "Senior Civil Engineer"}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <Badge
                      variant="outline"
                      className="bg-gray-100 text-primary"
                    >
                      New
                    </Badge>
                  </div>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left column - Contact Information */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-3">
                      <p>
                        <span className="text-primary">Email: </span>
                        <a
                          href={`mailto:${row.original.email}`}
                          className="text-primary"
                        >
                          {row.original.email}
                        </a>
                      </p>
                      <p>
                        <span className="text-primary">Phone: </span>
                        <span>{row.original.phoneNumber}</span>
                      </p>
                    </div>
                  </div>

                  {/* Right column - Experience & Education */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-4">
                      Experience & Education
                    </h3>
                    <div className="space-y-3">
                      <p>
                        <span className="text-primary">Experience: </span>
                        <span>{row.original.experience} years</span>
                      </p>
                      <p>
                        <span className="text-primary">Education: </span>
                        <span>MS Civil Engineering</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Documents */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">
                    Documents
                  </h3>
                  <div className="space-y-4">
                    {documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-md"
                      >
                        <div className="flex items-center">
                          <FileIcon className="h-6 w-6 text-primary mr-3" />
                          <span>{doc.name}</span>
                        </div>
                        <Button variant="secondary">Download</Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with actions */}
                <div className="mt-8 flex justify-end gap-4">
                  <Button variant="outline">Cancel</Button>
                  <Button>Schedule Interview</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
