import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email().min(3, { message: "Email Field should not be Empty!" }),
  password: z.string().min(3, { message: "Email Field should not be Empty!" }).max(20, { message: "Password cannot be max than 20 characters." })
})

export type LoginSchemaTypes = z.infer<typeof LoginSchema>