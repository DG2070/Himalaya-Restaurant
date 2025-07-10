// serviceSchema.ts
import * as z from "zod";

export const serviceFormSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Service name is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  features: z.array(z.string()),
  serviceImage: z.any().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type ServiceFormValues = z.infer<typeof serviceFormSchema>;
