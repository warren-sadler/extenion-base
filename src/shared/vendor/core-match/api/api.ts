import { ping } from "./ping";

export const API = {
  ping,
} as const;

export type API = typeof API;
