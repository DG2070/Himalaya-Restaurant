import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import useTestimonial from "./use-testimonial";
import type { TestimonialFormValues } from "./testimonial-schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { uploadFile } from "@/lib/utils";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import MyFormSheet from "@/components/shared/my-form-sheet";

const TestimonialForm = ({
  testimonialId,
  onDialogClose,
}: {
  testimonialId?: string;
  onDialogClose: () => void;
}) => {
  const { createTestimonial, testimonialForm } = useTestimonial(testimonialId);
  const [imagePreview, setImagePreview] = useState("");
  const onSubmit = (data: TestimonialFormValues) => {
    createTestimonial.mutate(data, {
      onSuccess: () => {
        onDialogClose();
      },
    });
  };
  useEffect(() => {
    if (testimonialId) {
      const image = testimonialForm.getValues("image");
      setImagePreview(image);
    }
  }, [testimonialId, testimonialForm.watch("image")]);

  const handleImageChange = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const file2 = await uploadFile(file);
        testimonialForm.setValue("image", file2 as string);
        setImagePreview(file2 as string);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };
  return (
    <Form {...testimonialForm}>
      <form onSubmit={testimonialForm.handleSubmit(onSubmit)}>
        <MyFormSheet
          formName="Testimonial"
          formToEditId={testimonialId}
          mutationName={createTestimonial}
        >
          <FormField
            control={testimonialForm.control}
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
            control={testimonialForm.control}
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
            control={testimonialForm.control}
            name="oranization"
            render={({ field }) => (
              <FormItem>
                <Label>Organization</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={testimonialForm.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <Label>Description</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label className="text-lg font-medium text-gray-700">
                Service Image
              </Label>
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
              {testimonialForm.formState.errors.image && (
                <div className="text-destructive text-sm">
                  {testimonialForm.formState.errors.image.message}
                </div>
              )}
            </div>
          </div>
        </MyFormSheet>
      </form>
    </Form>
  );
};

export default TestimonialForm;
