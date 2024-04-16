import * as schema from "./state";

export const State = {
  ...schema,
} as const;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace State {
  export type Type = schema.Type;
}
