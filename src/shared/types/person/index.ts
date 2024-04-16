import * as schema from "./person";
import * as helpers from "./helpers";
import { generateRandomPerson } from "./random";

export const Person = {
  ...schema,
  ...helpers,
  random: generateRandomPerson,
} as const;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Person {
  export type Type = schema.Type;
}
