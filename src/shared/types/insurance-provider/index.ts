import * as schema from "./insuranceProvider";

export const InsuranceProvider = {
  ...schema,
} as const;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace InsuranceProvider {
  export type Type = schema.Type;
}
