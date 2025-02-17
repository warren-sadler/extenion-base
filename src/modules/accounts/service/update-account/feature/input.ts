import { Account } from "@/modules/accounts/types/account";
import { z } from "zod";

export const schema = Account.schema;

export type Input = z.infer<typeof schema>;

export const validate = (value: unknown): Input => {
  return schema.parse(value);
};

export const isValid = (value: unknown): value is Input => {
  try {
    validate(value);
    return true;
  } catch {
    return false;
  }
};
