import { z } from "zod";

export const testimonialSchema = z.object({
  id: z.string().optional(),
  fullName: z.string().min(1, { message: "Full Name is required" }),
  designation: z.string().min(1, { message: "Designation is required" }),
  oranization: z.string().min(1, { message: "Organization is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  image: z.string().min(1, { message: "Image is required" }),
});

export type TestimonialFormValues = z.infer<typeof testimonialSchema>;
