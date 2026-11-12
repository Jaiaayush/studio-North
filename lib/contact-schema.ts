/*
  lib/contact-schema.ts — BACKEND (server only)
  The rule book for the contact form, written with Zod.
  The server checks every incoming enquiry against these rules. Anything that
  breaks a rule is rejected with the message written beside that rule.
*/
import { z } from "zod";
import { budgets } from "./site";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(80, "Name is too long."),
  email: z.string().trim().max(120, "Email is too long.").pipe(z.email("Enter a valid email address.")),
  /* Optional. If filled in, only digits, spaces and + ( ) - are allowed. */
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .regex(/^[0-9+() -]*$/, "Use digits only in the phone number.")
    .optional()
    .default(""),
  business: z.string().trim().min(2, "Tell us your trade or business.").max(120, "That is too long."),
  /* Must be exactly one of the options listed in lib/site.ts */
  budget: z.enum(budgets, "Choose a budget range."),
  message: z.string().trim().min(10, "Add a few more details (at least 10 characters).").max(2000, "Keep it under 2,000 characters."),
  /* Honeypot: real visitors leave this empty. Checked in the route, not here. */
  company_website: z.string().max(200).optional().default(""),
});

export type ContactData = z.infer<typeof contactSchema>;
