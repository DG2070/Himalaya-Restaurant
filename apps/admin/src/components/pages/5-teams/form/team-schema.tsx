import { z } from "zod";

export const teamSchema = z.object({
  id: z.string().optional(),
  fullName: z.string().min(1, { message: "Full Name is required" }),
  designation: z.string().min(1, { message: "Designation is required" }),
  experience: z.string().min(1, { message: "Experience is required" }),
  githubUrl: z.string().min(1, { message: "Github URL is required" }),
  linkedInUrl: z.string().min(1, { message: "LinkedIn URL is required" }),

  image: z.string().min(1, { message: "Image is required" }),
});

export type TeamFormValues = z.infer<typeof teamSchema>;
