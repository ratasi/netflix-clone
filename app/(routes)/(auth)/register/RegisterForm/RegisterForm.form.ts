import { z } from "zod";

export const formSchema = z
  .object({
    email: z.string().min(2, {
      message: "Email is too short",
    }),
    password: z.string().min(2, {
      message: "Email is too short",
    }),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "The passwords must match",
    path: ["repeatPassword"],
  });
