"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/UseToast";

import { processContactForm } from "@/lib/SendEmail";

import {
  ContactSchemaValues,
  contactSchema,
} from "@/lib/schemas/ContactFormSchema";

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<ContactSchemaValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      message: "",
    },
  });
  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<ContactSchemaValues> = async (
    data: ContactSchemaValues,
  ) => {
    const contactFormResult = await processContactForm(data);
    //const sendEmailResult = await sendEmail(data);
    if (
      contactFormResult &&
      !(contactFormResult.emailError || contactFormResult.formErrors)
    ) {
      //if (result && result.status === 200) {
      toast({
        description: "Email sent successfully!",
      });
      reset();
    } else {
      if (
        contactFormResult &&
        "formErrors" in contactFormResult &&
        contactFormResult.formErrors
      ) {
        const keys = Object.keys(contactFormResult.formErrors) as Array<
          keyof typeof contactFormResult.formErrors
        >;
        keys.forEach((key) => {
          const message = contactFormResult.formErrors?.[key];
          if (message) {
            setError(key, { message: message });
          }
        });
      }
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your email.",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        id="contact-form"
        className="w-2/3 space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          control={control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="fullName" aria-required={true}>
                Name
              </FormLabel>
              <FormControl>
                <Input
                  required
                  id="fullName"
                  placeholder="Enter your name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email" aria-required={true}>
                Email
              </FormLabel>
              <FormControl>
                <Input
                  required
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="message" aria-required={true}>
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  required
                  className="min-h-[100px]"
                  id="message"
                  placeholder="Enter your message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="cursor-pointer"
          form="contact-form"
          type="submit"
          aria-disabled={isSubmitting}
        >
          Send
        </Button>
      </form>
    </Form>
  );
}
