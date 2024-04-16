import * as schema from "./payer";

export const Payer = {
  ...schema,
} as const;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Payer {
  export type Type = schema.Type;
}
