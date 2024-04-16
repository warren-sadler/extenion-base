import { Account } from "./types/account";
import { service } from "./service";

export const Accounts = {
  Account,
  ...service,
} as const;
