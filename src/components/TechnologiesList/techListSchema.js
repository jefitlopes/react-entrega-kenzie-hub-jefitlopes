import { z } from "zod";

export const techListSchema = z.object({
  title: z
    .string()
    .nonempty("Campo obrigatório")
    .email("Forneça um email válido"),
  status: z.string().nonempty("Selecione uma opção"),
});
