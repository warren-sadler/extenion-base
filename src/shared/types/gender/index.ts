import { faker } from "@faker-js/faker";
import * as schema from "./gender";

export const Gender = {
  ...schema,
  random: faker.helpers.arrayElement(schema.GENDERS),
} as const;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Gender {
  export type Type = schema.Type;
}
