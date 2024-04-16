import { Accounts } from "./accounts";

export const repository = {
  Accounts,
} as const;

export type Repository = typeof repository;
