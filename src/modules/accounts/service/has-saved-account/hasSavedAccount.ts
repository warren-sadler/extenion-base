import { Implementation } from "@/shared/utils/define-service-method";
import { HasSavedAccount as Feature } from "./feature";

type HasSavedAccount = Implementation<
  Feature.Input,
  Feature.Output,
  Feature.Context
>;

export const implementation: HasSavedAccount = async (
  _input,
  { repository },
) => {
  const account = await repository.Accounts.get();
  console.debug("account", account);
  return Boolean(account);
};
