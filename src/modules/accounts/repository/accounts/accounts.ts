import { Account } from "@/modules/accounts/types/account";
import { NAMESPACE } from "../constants";

const ENTITY = "ACCOUNT" as const;
export const KEY = `${NAMESPACE}_${ENTITY}` as const;

export const set = (account: Account.Type) => {
  window.localStorage.setItem(KEY, JSON.stringify(account));
  return account;
};

export const get = (): Account.Type | null => {
  const value = window.localStorage.getItem(KEY);
  if (value === null) return null;
  const savedAccount = JSON.parse(value);
  const isValidAccount = Account.isValid(savedAccount);
  return isValidAccount ? savedAccount : null;
};
