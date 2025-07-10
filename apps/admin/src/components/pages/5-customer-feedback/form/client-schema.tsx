import { z } from "zod";

export const clientSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  link: z.string().optional(),
  category: z.array(z.string()).min(1, { message: "Category is required" }),
  client: z.string().min(1, { message: "Client is required" }),
  timeline: z.string().min(1, { message: "Timeline is required" }),
  date: z.string({ required_error: "Date is required" }),
  image: z.string().min(1, { message: "Image is required" }),
});

export type ClientFormValues = z.infer<typeof clientSchema>;
