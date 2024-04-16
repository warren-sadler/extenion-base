import * as schema from "./directory";

export const Directory = {
  ...schema,
} as const;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Directory {
  export type Type = schema.Type;
}
