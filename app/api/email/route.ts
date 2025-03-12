"use server";

import { CreateEmailResponseSuccess, ErrorResponse } from "resend";
import * as zod from "zod";

import { ContactEmail } from "@/components/email-templates/ContactEmail";
import { resend } from "@/lib/resend";
import { contactSchema } from "@/lib/schemas/ContactFormSchema";

type ContactSchemaValues = zod.infer<typeof contactSchema>;

type SendEmailResponse = {
  data?: CreateEmailResponseSuccess | null;
  error?: ErrorResponse | zod.ZodFormattedError<ContactSchemaValues>;
  status?: number;
};

export async function sendEmail(
  formData: ContactSchemaValues,
): Promise<SendEmailResponse> {
  const parsedFormData = contactSchema.safeParse(formData);
  if (parsedFormData.success) {
    const { name, emailAddress, message } = parsedFormData.data;
    try {
      const { data, error } = await resend.emails.send({
        from: process.env.FROM_ADDRESS!,
        to: [process.env.TO_ADDRESS!],
        subject: `${name} Contacted You`,
        react: ContactEmail({ name, emailAddress, message }),
      });

      if (error) {
        return { error: error, status: 500 };
      } else {
        return { data: data, status: 200 };
      }
    } catch (err: unknown) {
      const error = err as
        | ErrorResponse
        | zod.ZodFormattedError<ContactSchemaValues>;
      return { error: error, status: 500 };
    }
  } else {
    return { error: parsedFormData.error.format(), status: 400 };
  }
}
