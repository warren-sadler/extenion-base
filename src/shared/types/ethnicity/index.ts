import { faker } from "@faker-js/faker";
import * as schema from "./ethnicity";

export const Ethnicity = {
  ...schema,
  random: faker.helpers.arrayElement(schema.ETHNICITIES),
} as const;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Ethnicity {
  export type Type = schema.Type;
}
