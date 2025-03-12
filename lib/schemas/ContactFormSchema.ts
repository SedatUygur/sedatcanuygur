import * as zod from "zod";

import { NonEmpty } from "@/lib/zod/NonEmpty";

export const contactSchema = zod.object({
  name: zod.string().pipe(NonEmpty()),
  emailAddress: zod.string().email().pipe(NonEmpty()),
  message: zod
    .string()
    .pipe(NonEmpty(6, "Message must be thoughtful and at least 6 characters")),
});
