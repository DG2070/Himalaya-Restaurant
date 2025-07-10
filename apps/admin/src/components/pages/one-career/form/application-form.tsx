import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { uploadFile } from "@/lib/utils";
import { toast } from "sonner";
import type { ApplicationFormValues } from "./application-schema";
import useApplication from "./use-application";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { Fetch } from "@/lib/fetcher";
import type { CareerFormValues } from "../../3-foods/form/career-schema";
import { useEffect, useState } from "react";

interface dataProps {
  message: string;
  success: boolean;
  data: {
    data: CareerFormValues[];
  };
}
const ApplicationForm = ({
  applicationId,
  onDialogClose,
}: {
  applicationId?: string;
  onDialogClose: () => void;
}) => {
  const { createApplication, applicationForm } = useApplication(applicationId);
  const [selectedCareer, setSelectedCareer] = useState<
    CareerFormValues | undefined
  >(undefined);
  const onSubmit = (data: ApplicationFormValues) => {
    const formData = {
      ...data,
    };
    console.log(formData);
    createApplication.mutate(formData, {
      onSuccess: () => {
        onDialogClose();
      },
    });
  };

  const { data: careerDatas } = useQuery({
    queryKey: ["careersss"],
    queryFn: async () => {
      return Fetch<dataProps>({
        url: "/career",
        method: "GET",
      });
    },
  });

  useEffect(() => {
    const selectedCareer = careerDatas?.data?.data.find(
      (career) => career.id === applicationForm.watch("jobId")
    );
    console.log("selectedCareer111", selectedCareer);
    setSelectedCareer(selectedCareer);
  }, [applicationForm.watch("jobId")]);
  console.log("selectedCareer", selectedCareer);

  return (
    <Form {...applicationForm}>
      <form onSubmit={applicationForm.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 max-h-[50dvh] overflow-scroll  my-4">
          <FormField
            control={applicationForm.control}
            name="jobId"
            render={({ field }) => (
              <FormItem>
                <Label>Job ID</Label>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full overflow-hidden">
                        {selectedCareer ? (
                          <div className="w-full">
                            {selectedCareer?.position}
                          </div>
                        ) : (
                          <SelectValue
                            placeholder="Select the job"
                            className="w-full"
                          />
                        )}
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-[50dvw] overflow-hidden ">
                      {careerDatas?.data?.data.map(
                        (career: any, idx: number) => {
                          console.log("career", career);
                          return (
                            <SelectItem key={idx} value={career.id}>
                              {career.position}
                            </SelectItem>
                          );
                        }
                      )}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicationForm.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <Label>First Name</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={applicationForm.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <Label>Last Name</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicationForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label>Email</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicationForm.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <Label>Phone Number</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicationForm.control}
            name="resume"
            render={({ field }) => (
              <FormItem>
                <Label>Resume</Label>
                <FormControl>
                  <Input
                    type="file"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        try {
                          const fileData = await uploadFile(file);
                          field.onChange(fileData);
                        } catch (error: any) {
                          toast.error(error.message);
                        }
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={applicationForm.control}
            name="portfolioUrl"
            render={({ field }) => (
              <FormItem>
                <Label>Portfolio URL</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicationForm.control}
            name="linkedinUrl"
            render={({ field }) => (
              <FormItem>
                <Label>LinkedIn URL</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicationForm.control}
            name="coverLetter"
            render={({ field }) => (
              <FormItem>
                <Label>Cover Letter</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicationForm.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <Label>Experience</Label>
                <FormControl>
                  <Input {...field} type="date" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicationForm.control}
            name="githubUrl"
            render={({ field }) => (
              <FormItem>
                <Label>GitHub URL</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicationForm.control}
            name="currentCompany"
            render={({ field }) => (
              <FormItem>
                <Label>Current Company</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicationForm.control}
            name="currentRole"
            render={({ field }) => (
              <FormItem>
                <Label>Current Role</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicationForm.control}
            name="expectedSalary"
            render={({ field }) => (
              <FormItem>
                <Label>Expected Salary</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button>Submit</Button>
      </form>
    </Form>
  );
};

export default ApplicationForm;
