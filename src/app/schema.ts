import { string, z } from "zod";

export const todoSchema = z.object({
  id: string().optional(),
  title: z.string().optional(),
});
