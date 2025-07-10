import { Badge } from "@/components/ui/badge";
import type { ApplicationFormValues } from "./form/food-group-schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { File, User, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
export default function ApplicationView({
  application,
  onClose,
}: {
  application: ApplicationFormValues;
  onClose: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={""} />
            <AvatarFallback>
              {application.firstName.charAt(0).toUpperCase()}
              {application.lastName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            {application.firstName} {application.lastName}
          </div>
        </div>
        <Badge variant="outline">{application.status}</Badge>
      </div>
      <hr className="my-4" />
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-bold">Contact Information</div>
          <div className="text-sm text-primary">email: {application.email}</div>
          <div className="text-sm text-primary">
            phone: {application.phoneNumber}
          </div>
        </div>
        <div>
          <div className="text-sm font-bold">Experience Information</div>
          <div className="text-sm text-primary">
            Experience: {application.experience}
          </div>
          <div className="text-sm text-primary">
            Current Company: {application.currentCompany}
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <h2 className="">Cover Letter</h2>
      <div className="text-sm text-primary">{application.coverLetter}</div>
      <hr className="my-4" />
      <h2 className="text-lg font-bold">Documents</h2>
      <div className="flex flex-col gap-1">
        <Card className="px-4 py-1 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <File className="w-4 h-4" />
            <div className="text-sm text-primary">Resume</div>
          </div>
          <div>
            {" "}
            <a
              href={application.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="">Download</Button>
            </a>
          </div>
        </Card>

        <Card className="px-4 py-1 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <div className="text-sm text-primary">Portfolio</div>
          </div>
          <div>
            {" "}
            <a
              href={application.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="">View</Button>
            </a>
          </div>
        </Card>
        <Card className="px-4 py-1 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <div className="text-sm text-primary">LinkedIn</div>
          </div>
          <div>
            {" "}
            <a
              href={application.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="">View</Button>
            </a>
          </div>
        </Card>

        <Card className="px-4 py-1 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            <div className="text-sm text-primary">GitHub</div>
          </div>
          <div>
            {" "}
            <a
              href={application.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="">View</Button>
            </a>
          </div>
        </Card>
      </div>
      <DialogFooter>
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="default">Schedule Interview</Button>
      </DialogFooter>
    </div>
  );
}
