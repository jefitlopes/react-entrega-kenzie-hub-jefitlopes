import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .min(1, "Campo email obrigatório")
    .email("Forneça um email válido"),
  password: z.string().min(8, "A senha deve conter ao menor 8 caracteres"),
});
