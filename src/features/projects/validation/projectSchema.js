import { z } from "zod";
import { projectCategories, projectStatuses } from "../constants/mockProjects";

export const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100),
  slug: z.string().min(3, "Slug must be at least 3 characters").regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
  shortDesc: z.string().min(10, "Short description is required (min 10 chars)").max(200),
  overview: z.string().min(20, "Overview is required (min 20 chars)"),
  category: z.enum(projectCategories, {
    errorMap: () => ({ message: "Please select a valid category" })
  }),
  technologies: z.string().min(2, "Add at least one technology"),
  image: z.string().optional(),
  githubClient: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  githubServer: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  liveUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  featured: z.boolean().default(false),
  displayOrder: z.coerce.number().int().default(0),
  status: z.enum(projectStatuses).default("Completed"),
  timeline: z.string().optional(),
  role: z.string().optional(),
  challenges: z.string().optional(),
  features: z.string().optional(),
  futureImprovements: z.string().optional(),
  seoTitle: z.string().max(60, "SEO Title should be under 60 chars").optional(),
  seoDescription: z.string().max(160, "SEO Description should be under 160 chars").optional(),
});

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
});
