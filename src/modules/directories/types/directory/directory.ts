import { z } from "zod";

export const schema = z.object({
  name: z.string(),
  domain: z.string().url(),
  description: z.string().optional(),
  imageUrl: z.string().url().optional(),
});

export type Type = z.infer<typeof schema>;

export const validate = (value: unknown): Type => {
  return schema.parse(value);
};

export const isValid = (value: unknown): value is Type => {
  try {
    validate(value);
    return true;
  } catch {
    return false;
  }
};
