import { z } from "zod";

export const careerSchema = z.object({
  id: z.string().optional(),
  position: z.string().min(1, { message: "Position is required" }),
  field: z.string().min(1, { message: "Field is required" }),
  description: z.string().min(1, { message: "Description  is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  isRemote: z.boolean(),
  isPartTimer: z.boolean(),
  experience: z.string().min(1, { message: " Experince is required" }),
  openQuota: z.any(),
  deadline: z.string(),
  isActive: z.boolean(),
});

export type CareerFormValues = z.infer<typeof careerSchema>;
