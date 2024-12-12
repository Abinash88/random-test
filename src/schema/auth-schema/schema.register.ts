import { z } from "zod";

export const RegisterSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username field should not be Empty!" }),
  email: z
    .string()
    .email()
    .min(3, { message: "Email Field should not be Empty!" }),
  password: z
    .string()
    .min(3, { message: "Email Field should not be Empty!" })
    .max(20, { message: "Password cannot be max than 20 characters." }),
});

export type RegisterSchemaTypes = z.infer<typeof RegisterSchema>;
