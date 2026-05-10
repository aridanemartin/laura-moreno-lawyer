"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "El nombre es obligatorio."),
  email: z.string().email("Introduce un email válido."),
  phone: z.string().min(6, "El teléfono es obligatorio."),
  area: z.enum(["laboral", "civil", "otro"], {
    error: "Selecciona un área jurídica.",
  }),
  description: z
    .string()
    .min(30, "Describe tu asunto (mínimo 30 caracteres)."),
  consent: z.literal("on", {
    error: "Debes aceptar la política de privacidad.",
  }),
  honeypot: z.literal("").optional(),
});

export type ContactFormState = {
  success: boolean;
  errors?: Partial<Record<keyof z.infer<typeof schema>, string>>;
  message?: string;
};

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot check
  if (formData.get("honeypot")) {
    return { success: true }; // silent discard
  }

  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    area: formData.get("area"),
    description: formData.get("description"),
    consent: formData.get("consent"),
    honeypot: formData.get("honeypot") ?? "",
  };

  const result = schema.safeParse(raw);

  if (!result.success) {
    const errors: ContactFormState["errors"] = {};
    for (const issue of result.error.issues) {
      const key = issue.path[0] as keyof typeof errors;
      if (!errors[key]) errors[key] = issue.message;
    }
    return { success: false, errors };
  }

  // TODO: send email via Resend/Nodemailer with real credentials
  // const { name, email, phone, area, description } = result.data;
  // await sendEmail({ to: process.env.CONTACT_EMAIL, ... });

  return {
    success: true,
    message:
      "Gracias. Hemos recibido tu consulta. Nos pondremos en contacto contigo lo antes posible.",
  };
}
