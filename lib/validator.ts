import { z } from "zod";
import { formatNumberWithDecimal } from "@/lib/utils";

// Currency validation helper (unused but kept for future use)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly two decimal places"
  ); // Adjust regex as needed

// Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  slug: z.string().min(3, { message: "Slug must be at least 3 characters" }),
  category: z
    .string()
    .min(3, { message: "Category must be at least 3 characters" }),
  brand: z.string().min(3, { message: "Brand must be at least 3 characters" }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }),
  stock: z.coerce.number(),
  images: z
    .array(z.string())
    .min(1, { message: "At least one image is required" }),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: z.number(),
});
