"use server";

import { EmailTemplate } from "@/components/ContactEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(name: string, to: string, message: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Guru Updesh Singh <contact@guruupdeshsingh.dev>",
      to: [to],
      subject: "Thank You for Reaching Out!",
      react: EmailTemplate({ name, message }),
      text: "test",
    });

    if (error) {
      return { error: error, result: null };
    }

    return { error: null, result: data };
  } catch (error) {
    return { error: error, result: null };
  }
}
