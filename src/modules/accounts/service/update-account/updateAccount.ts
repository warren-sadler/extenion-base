import { Implementation } from "@/shared/utils/define-service-method";
import { UpdateAccount as Feature } from "./feature";

type UpdateAccount = Implementation<
  Feature.Input,
  Feature.Output,
  Feature.Context
>;

export const implementation: UpdateAccount = async (input, { repository }) => {
  const result = repository.Accounts.set(input);
  return result;
};
