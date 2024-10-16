import { z } from "zod";

export const userSignupSchema = z.object({
  fullname: z
    .string()
    .min(3, "Fullname must be at least 3 characters, required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters."),
  contact: z
    .string()
    .min(10, { message: "Contact number at least 10 digit" })
    .max(15, "Contact number at most 15 digit"),
});

export type SignupInputState = z.infer<typeof userSignupSchema>;

export const userLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export type LoginInputState = z.infer<typeof userLoginSchema>;
