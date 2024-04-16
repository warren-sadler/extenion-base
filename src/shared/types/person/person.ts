import { z } from "zod";
import { ERROR_MESSAGE } from "./constants";

export const schema = z.object({
  givenName: z.string().min(1, { message: ERROR_MESSAGE.GIVEN_NAME }),
  surname: z.string().min(1, { message: ERROR_MESSAGE.SURNAME }),
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
