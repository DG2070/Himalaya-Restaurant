import MyFormSheet from "@/components/shared/my-form-sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { CareerFormValues } from "./career-schema";
import useCareer from "./use-career";

const CareerForm = ({
  careerId,
  onDialogClose,
  isEdit,
}: {
  careerId?: string;
  onDialogClose: () => void;
  isEdit?: boolean;
}) => {
  const { createCareer, careerForm } = useCareer(careerId, isEdit);
  const onSubmit = (data: CareerFormValues) => {
    const formData = {
      ...data,
      openQuota: Number(data.openQuota),
    };
    createCareer.mutate(formData, {
      onSuccess: () => {
        onDialogClose();
      },
    });
  };

  return (
    <Form {...careerForm}>
      <form onSubmit={careerForm.handleSubmit(onSubmit)}>
        <MyFormSheet
          mutationName={createCareer}
          formName="Career"
          formToEditId={careerId}
        >
          <FormField
            control={careerForm.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <Label>Position</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={careerForm.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <Label>Description</Label>
                <FormControl>
                  <Input {...field} />
                  {/* <HTMLEditor {...field}/> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={careerForm.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <Label>Experience</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={careerForm.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <Label>Location</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={careerForm.control}
            name="field"
            render={({ field }) => (
              <FormItem>
                <Label>Field</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <FormField
                control={careerForm.control}
                name="isRemote"
                render={({ field }) => (
                  <FormItem className=" ">
                    <Label>Job Type</Label>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value: string) => {
                          field.onChange(value === "remote");
                        }}
                        defaultValue={field.value ? "remote" : "onsite"}
                        className="flex items-center gap-1"
                      >
                        <FormItem className="flex items-center ">
                          <FormControl>
                            <RadioGroupItem value="onsite" />
                          </FormControl>
                          <FormLabel className="font-normal">On site</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center ">
                          <FormControl>
                            <RadioGroupItem value="remote" />
                          </FormControl>
                          <FormLabel className="font-normal">Remote</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={careerForm.control}
                name="isPartTimer"
                render={({ field }) => (
                  <FormItem className="">
                    <Label>Is Part Timer</Label>
                    <FormControl>
                      <FormControl>
                        <RadioGroup
                          onValueChange={(value: string) => {
                            field.onChange(value === "part-time");
                          }}
                          defaultValue={field.value ? "part-time" : "full-time"}
                          className="flex items-center gap-1"
                        >
                          <FormItem className="flex items-center ">
                            <FormControl>
                              <RadioGroupItem value="part-time" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Part time
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center ">
                            <FormControl>
                              <RadioGroupItem value="full-time" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Full time
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={careerForm.control}
            name="openQuota"
            render={({ field }) => (
              <FormItem>
                <Label>Quota</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={careerForm.control}
            name="deadline"
            render={({ field }) => (
              <FormItem>
                <Label>Deadline</Label>
                <FormControl>
                  <Input {...field} type="date" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={careerForm.control}
            name="isActive"
            render={({ field }) => (
              <FormItem>
                <Label>Is Active</Label>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value: string) => {
                      field.onChange(value === "active");
                    }}
                    defaultValue={field.value ? "active" : "inactive"}
                    className="flex items-center gap-1"
                  >
                    <FormItem className="flex items-center ">
                      <FormControl>
                        <RadioGroupItem value="active" />
                      </FormControl>
                      <FormLabel className="font-normal">Active</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center ">
                      <FormControl>
                        <RadioGroupItem value="inactive" />
                      </FormControl>
                      <FormLabel className="font-normal">Inactive</FormLabel>
                    </FormItem>
                  </RadioGroup>
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

export default CareerForm;
