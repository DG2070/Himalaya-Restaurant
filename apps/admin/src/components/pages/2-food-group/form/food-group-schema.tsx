import { z } from "zod";

export const foodGroupSchema = z.object({
  id: z.string().optional(),
  jobId: z.string().optional(),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  resume: z.string().min(1, { message: "Resume is required" }),
  status: z.string().optional(),
  portfolioUrl: z.string().url({ message: "Invalid portfolio URL" }).optional(),
  linkedinUrl: z.string().url({ message: "Invalid LinkedIn URL" }).optional(),
  coverLetter: z.string().min(1, { message: "Cover letter is required" }),
  experience: z.string().min(1, { message: "Experience is required" }),
  githubUrl: z.string().url({ message: "Invalid GitHub URL" }).optional(),
  currentCompany: z.string().min(1, { message: "Current company is required" }),
  currentRole: z.string().min(1, { message: "Current role is required" }),
  expectedSalary: z.any({ message: "Expected salary is required" }),
});

export type FoodGroupFormValues = z.infer<typeof foodGroupSchema>;
