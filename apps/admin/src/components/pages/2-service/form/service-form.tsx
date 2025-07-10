import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { Textarea } from "@/components/ui/textarea";
import type { ServiceFormValues } from "./service-schema";
import { toast } from "sonner";
import { uploadFile } from "@/lib/utils";
import useService from "./use-service";
import MyFormSheet from "@/components/shared/my-form-sheet";

const ServiceForm = ({
  serviceId,
  onDialogClose,
}: {
  serviceId?: string;
  onDialogClose: () => void;
}) => {
  const [keyFeatures, setKeyFeatures] = useState<string[]>([]);
  const [newFeature, setNewFeature] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const { serviceForm, createService } = useService(serviceId);

  useEffect(() => {
    if (serviceId) {
      setKeyFeatures(serviceForm.getValues("features"));
      setImagePreview(serviceForm.getValues("serviceImage"));
    }
  }, [serviceId]);

  const addKeyFeature = () => {
    if (newFeature.trim() !== "") {
      setKeyFeatures([...keyFeatures, newFeature]);
      setNewFeature("");
    }
  };

  const removeKeyFeature = (index: number) => {
    const updatedFeatures = [...keyFeatures];
    updatedFeatures.splice(index, 1);
    setKeyFeatures(updatedFeatures);
  };

  const handleImageChange = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const file2 = await uploadFile(file);
        serviceForm.setValue("serviceImage", file2);
        setImagePreview(file2 as string);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };

  const handleFormSubmit = (data: ServiceFormValues) => {
    data.features = keyFeatures;
    createService.mutate(data, {
      onSuccess: () => {
        onDialogClose();
      },
    });
  };

  return (
    <Form {...serviceForm}>
      <form
        onSubmit={serviceForm.handleSubmit(handleFormSubmit)}
        className="space-y-8"
      >
        <MyFormSheet
          formName="Service"
          formToEditId={serviceId}
          mutationName={createService}
        >
          <FormField
            control={serviceForm.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-gray-700">
                  Service Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full p-2 border rounded-md"
                    disabled={createService.isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={serviceForm.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-gray-700">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="w-full p-2 min-h-[150px] border rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <Label className="text-lg font-medium text-gray-700">
              Key Features
            </Label>
            <div className="bg-gray-50 p-4 rounded-md">
              {keyFeatures.length > 0 && (
                <ul className="mb-4 space-y-2">
                  {keyFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm"
                    >
                      <span>{feature}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeKeyFeature(index)}
                        className="text-red-500"
                        disabled={createService.isPending}
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex space-x-2">
                <Input
                  value={newFeature}
                  onChange={(e: any) => setNewFeature(e.target.value)}
                  placeholder="Add key feature"
                  className="flex-1"
                />
                <Button
                  type="button"
                  onClick={addKeyFeature}
                  className=" text-white"
                  disabled={createService.isPending || !newFeature.trim()}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

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
                  />
                </div>
              </Card>
            </div>
          </div>
        </MyFormSheet>
      </form>
    </Form>
  );
};

export default ServiceForm;
