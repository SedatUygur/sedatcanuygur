import { insertEmail } from "@/app/api/db/emails";
import {
  contactSchema,
  ContactSchemaValues,
} from "@/lib/schemas/ContactFormSchema";
//import { toaster } from '@/src/components/ui/toaster';

type ProcessContactFormResponse = {
  emailError?: string;
  formErrors?: Partial<ContactSchemaValues>;
};

/**
 * Sends an email using the provided contact data.
 *
 * This function sends a POST request to the `/api/email` endpoint with
 * the contact form data in JSON format. It returns a promise that resolves
 * with a success message and status code if the email is sent successfully,
 * or an error message and status code if there is a failure.
 *
 * @param data - The contact form data containing name, email, and message.
 * @returns A promise that resolves with a response object indicating the result
 * of the email sending operation.
 */

export function sendEmail(data: ContactSchemaValues) {
  const apiEndpoint = "http://localhost:3000/api/email";

  const postEmail = fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const getResponse = async () => {
    const response = await postEmail;
    if (response.ok && response.status === 200) {
      return { message: "Email sent", status: 200 };
    } else {
      return { error: "Email not sent", status: 500 };
    }
  };
  return getResponse();
}

export async function processContactForm(
  formData: ContactSchemaValues,
): Promise<ProcessContactFormResponse> {
  const parsedFormData = contactSchema.safeParse(formData);
  if (parsedFormData.success) {
    const { fullName, emailAddress, message } = parsedFormData.data;

    const databaseResult = await insertEmail({
      fullName,
      emailAddress,
      message,
    });

    if (databaseResult.errorMessage || databaseResult.columnErrors) {
      if (databaseResult.columnErrors) {
        return { formErrors: databaseResult.columnErrors.formFields };
      }
    }
    const sendEmailResult = await sendEmail({
      fullName,
      emailAddress,
      message,
    });

    if (sendEmailResult.error) {
      return { emailError: sendEmailResult.error };
    }

    return {};
  } else {
    const errorMap = parsedFormData.error.flatten().fieldErrors;
    return {
      formErrors: {
        fullName: errorMap["fullName"]?.[0],
        emailAddress: errorMap["emailAddress"]?.[0],
        message: errorMap["message"]?.[0],
      },
    };
  }
}
