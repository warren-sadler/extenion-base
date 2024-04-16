import { z } from "zod";
import { Person } from "@/shared/types/person";
import { Concern } from "@/shared/types/concern";
import { State } from "@/shared/types/state";
import { InsuranceProvider } from "@/shared/types/insurance-provider";

export const baseSchema = z.object({
  emailAddress: z
    .string()
    .email()
    .transform((v) => v.toLowerCase()),
  concerns: Concern.schema
    .array()
    .min(1, { message: "At least one concern is required" }),
  state: State.schema,
  insurance: InsuranceProvider.schema,
});

export const schema = Person.schema.merge(baseSchema);

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
