import { z } from "zod";
import { Account } from "@/modules/accounts/types/account";

export const schema = Account.schema;

export type Output = z.infer<typeof schema>;

export const validate = (value: unknown): Output => {
  return schema.parse(value);
};

export const isValid = (value: unknown): value is Output => {
  try {
    validate(value);
    return true;
  } catch {
    return false;
  }
};
