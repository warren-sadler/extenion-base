import * as API from "./api";

export const CoreMatch = {
  API,
} as const;

export type CoreMatch = typeof CoreMatch;
