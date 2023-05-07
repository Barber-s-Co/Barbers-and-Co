import { z } from "zod";

export const ZodRegister = z
  .object({
    name: z.string().min(3, "Nome precisa conter pelo menos 3 caracteres"),
    email: z.string().nonempty("Email é obrigatório").email("Forneça um email válido"),
    password: z
      .string()
      .min(7, "Senha deve conter pelo menos 7 caracteres")
      .regex(/(?=.*['A-Z'])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*['a-z'])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(/[^a-zA-Z 0-9]+/g, "É necessário pelo menos um simbolo"),
    confirm: z.string().min(1, "Confirmar senha é obrigatório"),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "A confirmação e a senha precisam corresponder",
    path: ["confirm"],
  });

export type TRegisterFormValues = z.infer<typeof ZodRegister>;
