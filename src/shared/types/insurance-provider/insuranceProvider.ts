import { z } from "zod";
import { Payer } from "../payer";

const OTHER = "Other" as const;
const I_DONT_HAVE_INSURANCE = "I don't have insurance" as const;

export const INSURANCE_PROVIDERS = [
  ...Payer.PAYERS,
  OTHER,
  I_DONT_HAVE_INSURANCE,
] as const;

export const schema = z.enum(INSURANCE_PROVIDERS);

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
