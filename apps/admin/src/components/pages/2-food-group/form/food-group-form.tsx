import MyFormSheet from "@/components/shared/my-form-sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Fetch } from "@/lib/fetcher";
import { uploadFile } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import type { CareerFormValues } from "../../3-foods/form/career-schema";
import type { FoodGroupFormValues } from "./food-group-schema";
import useFoodGroup from "./use-food-group";

interface dataProps {
  message: string;
  success: boolean;
  data: {
    data: CareerFormValues[];
  };
}
const FoodGroupForm = ({
  foodGroupId,
  onDialogClose,
}: {
  foodGroupId?: string;
  onDialogClose: () => void;
}) => {
  const { createFoodGroup, foodGroupForm } = useFoodGroup(foodGroupId);
  const [selectedCareer, setSelectedCareer] = useState<
    CareerFormValues | undefined
  >(undefined);
  const onSubmit = (data: FoodGroupFormValues) => {
    const formData = {
      ...data,
    };
    createFoodGroup.mutate(formData, {
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
      (career) => career.id === foodGroupForm.watch("jobId")
    );
    console.log("selectedCareer111", selectedCareer);
    setSelectedCareer(selectedCareer);
  }, [foodGroupForm.watch("jobId")]);
  console.log("selectedCareer", selectedCareer);

  return (
    <Form {...foodGroupForm}>
      <form onSubmit={foodGroupForm.handleSubmit(onSubmit)}>
        <MyFormSheet
          mutationName={createFoodGroup}
          formName="FoodGroup"
          formToEditId={foodGroupId}
        >
          <FormField
            control={foodGroupForm.control}
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
                          return (
                            <SelectItem key={idx} value={career.id.toString()}>
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
            control={foodGroupForm.control}
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
            control={foodGroupForm.control}
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
            control={foodGroupForm.control}
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
            control={foodGroupForm.control}
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
            control={foodGroupForm.control}
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
            control={foodGroupForm.control}
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
            control={foodGroupForm.control}
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
            control={foodGroupForm.control}
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
            control={foodGroupForm.control}
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
            control={foodGroupForm.control}
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
            control={foodGroupForm.control}
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
            control={foodGroupForm.control}
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
            control={foodGroupForm.control}
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
        </MyFormSheet>
      </form>
    </Form>
  );
};

export default FoodGroupForm;
