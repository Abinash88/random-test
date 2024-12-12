import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Email should be longer than 3 characters." })
    .email()
    .max(40, { message: "Email should not be longer than 50 characters." }),
  password: z
    .string()
    .min(3, { message: "Password Field should not be Empty!" })
    .regex(/[A-Z]/, { message: "Password must contain one Uppercase!" })
    .regex(/[a-z]/, { message: "Password must contain one Lowercase!" })
    .regex(/[0-9]/, { message: "Password must contain one Lowercase!" })
    .regex(/[@#$%!&?]/, {
      message: "Password must contain one Special Characters!",
    })
    .max(30, { message: "Password cannot be max than 20 characters." }),
});

export type LoginSchemaTypes = z.infer<typeof LoginSchema>;
