import { ContactSchemaValues } from "@/components/ContactForm";
//import { toaster } from '@/src/components/ui/toaster';

export function sendEmail(data: ContactSchemaValues) {
  const apiEndpoint = "/api/email";

  const postEmail = fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const getResponse = async () => {
    const response = await postEmail;
    if (response.ok && response.status === 200) {
      return { message: "Email sent!", status: 200 };
    } else {
      return { error: "Email not sent", status: 500 };
    }
  };
  return getResponse();
}
