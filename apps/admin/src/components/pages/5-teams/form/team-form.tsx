import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import useTeam from "./use-team";
import type { TeamFormValues } from "./team-schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { uploadFile } from "@/lib/utils";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import MyFormSheet from "@/components/shared/my-form-sheet";

const TeamForm = ({
  teamId,
  onDialogClose,
}: {
  teamId?: string;
  onDialogClose: () => void;
}) => {
  const { createTeam, teamForm } = useTeam(teamId);
  const [imagePreview, setImagePreview] = useState("");
  const onSubmit = (data: TeamFormValues) => {
    createTeam.mutate(data, {
      onSuccess: () => {
        onDialogClose();
      },
    });
  };
  useEffect(() => {
    if (teamId) {
      const image = teamForm.getValues("image");
      setImagePreview(image);
    }
  }, [teamId, teamForm.watch("image")]);

  const handleImageChange = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const file2 = await uploadFile(file);
        teamForm.setValue("image", file2 as string);
        setImagePreview(file2 as string);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };
  return (
    <Form {...teamForm}>
      <form onSubmit={teamForm.handleSubmit(onSubmit)}>
        <MyFormSheet
          formName="Team"
          mutationName={createTeam}
          formToEditId={teamId}
        >
          <FormField
            control={teamForm.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <Label>Full Name</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={teamForm.control}
            name="designation"
            render={({ field }) => (
              <FormItem>
                <Label>Designation</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={teamForm.control}
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
            control={teamForm.control}
            name="githubUrl"
            render={({ field }) => (
              <FormItem>
                <Label>Github Url</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={teamForm.control}
            name="linkedInUrl"
            render={({ field }) => (
              <FormItem>
                <Label>Linkedin Url</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label>Team Image</Label>
              <Card className="border rounded-md p-2">
                <div className="flex flex-col items-center">
                  <div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Service preview"
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <Plus className="h-12 w-12 text-gray-400" />
                    )}
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-auto"
                    onClick={() => {
                      const imageUploadElement =
                        document?.getElementById("imageUpload");
                      if (imageUploadElement) {
                        imageUploadElement.click();
                      }
                    }}
                  >
                    Choose Image
                  </Button>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                    // disabled={isSubmitting}
                  />
                </div>
              </Card>
              {teamForm.formState.errors.image && (
                <div className="text-destructive text-sm">
                  {teamForm.formState.errors.image.message}
                </div>
              )}
            </div>
          </div>
        </MyFormSheet>
      </form>
    </Form>
  );
};

export default TeamForm;
