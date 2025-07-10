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
import { uploadFile } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import type { ClientFormValues } from "./client-schema";
import useClient from "./use-client";
import MyFormSheet from "@/components/shared/my-form-sheet";

const ClientForm = ({
  clientId,
  onDialogClose,
}: {
  clientId?: string;
  onDialogClose?: () => void;
}) => {
  const { createClient, clientForm } = useClient(clientId);
  const [category, setCategory] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (clientId) {
      const image = clientForm.getValues("image");
      const category = clientForm.getValues("category");
      setCategory(category);
      setImagePreview(image);
    }
  }, [clientId, clientForm]);

  const addCategory = () => {
    if (newCategory.trim() !== "") {
      const updatedCategories = [...category, newCategory];
      setCategory(updatedCategories);
      clientForm.setValue("category", updatedCategories);
      setNewCategory("");
    }
  };

  const removeCategory = (index: number) => {
    const updatedCategories = [...category];
    updatedCategories.splice(index, 1);
    setCategory(updatedCategories);
    clientForm.setValue("category", updatedCategories);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const uploadedFile = await uploadFile(file);
        clientForm.setValue("image", uploadedFile as string);
        setImagePreview(uploadedFile as string);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };

  const onSubmit = (data: ClientFormValues) => {
    createClient.mutate(data, {
      onSuccess: () => {
        if (onDialogClose) {
          onDialogClose();
        }
      },
    });
  };

  return (
    <Form {...clientForm}>
      <form onSubmit={clientForm.handleSubmit(onSubmit)}>
        <MyFormSheet
          formName="Client"
          formToEditId={clientId}
          mutationName={createClient}
        >
          <FormField
            control={clientForm.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <Label>Title</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={clientForm.control}
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

          <FormField
            control={clientForm.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <Label>Link</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <Label className="text-lg font-medium text-gray-700">
              Category
            </Label>
            <div className="bg-gray-50 p-4 rounded-md">
              {category.length > 0 && (
                <ul className="mb-4 space-y-2">
                  {category.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-white p-2 rounded-md shadow-sm"
                    >
                      <span>{item}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeCategory(index)}
                        className="text-red-500"
                        disabled={createClient.isPending}
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex space-x-2">
                <Input
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Add category"
                  className="flex-1"
                  disabled={createClient.isPending}
                />
                <Button
                  type="button"
                  onClick={addCategory}
                  className="bg-blue-600 text-white"
                  disabled={createClient.isPending || !newCategory.trim()}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <FormField
            control={clientForm.control}
            name="client"
            render={({ field }) => (
              <FormItem>
                <Label>Client</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label>Client Image</Label>
              <Card className="border rounded-md p-2">
                <div className="flex flex-col items-center">
                  <div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center mb-4">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Client preview"
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
                      document.getElementById("imageUpload")?.click();
                    }}
                    disabled={createClient.isPending}
                  >
                    Choose Image
                  </Button>
                  <input
                    id="imageUpload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                    disabled={createClient.isPending}
                  />
                </div>
              </Card>
              {clientForm.formState.errors.image && (
                <div className="text-destructive text-sm">
                  {clientForm.formState.errors.image.message}
                </div>
              )}
            </div>
          </div>

          <FormField
            control={clientForm.control}
            name="timeline"
            render={({ field }) => (
              <FormItem>
                <Label>Timeline</Label>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={clientForm.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  value={clientForm.getValues("date").split("T")[0]}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </MyFormSheet>
      </form>
    </Form>
  );
};

export default ClientForm;
