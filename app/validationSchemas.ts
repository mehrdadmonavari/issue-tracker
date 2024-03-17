import { z } from "zod";

export const createIssueSchema = z.object({
   title: z.string().min(1, "title is required").max(255, "title is too large"),
   description: z.string().min(1, "description is required"),
});

export const editIssueSchema = z.object({
   title: z.string().min(1, "title is required").max(255, "title is too large"),
   description: z.string().min(1, "description is required"),
});
