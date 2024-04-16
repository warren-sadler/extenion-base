import { z } from "zod";

export const ETHNICITIES = [
  "Asian",
  "American Indian",
  "Caribbean American",
  "Black or African American",
  "East Asian",
  "European American",
  "Hispanic, Latino, or of Spanish origin",
  "Jewish",
  "Middle Eastern",
  "Pacific Islander",
  "Russian",
  "South Asian",
  "Southeast Asian",
  "White",
] as const;

export const schema = z.enum(ETHNICITIES);

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
