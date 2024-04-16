import * as schema from "./account";
import { generateRandomAccount } from "./random";

export const Account = {
  ...schema,
  random: generateRandomAccount,
} as const;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Account {
  export type Type = schema.Type;
}
