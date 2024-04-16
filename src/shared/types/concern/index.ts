import { faker } from "@faker-js/faker";
import * as schema from "./concern";

export const Concern = {
  ...schema,
  random: () => faker.helpers.arrayElement(schema.CONCERNS),
} as const;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Concern {
  export type Type = schema.Type;
}
