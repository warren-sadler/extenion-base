import { defineServiceMethod } from "@/shared/utils/define-service-method";

import { HasSavedAccount } from "./feature";
import { implementation } from "./hasSavedAccount";

import { repository } from "../../repository";

export const hasSavedAccount = defineServiceMethod({
  implementation,
  input: HasSavedAccount.inputSchema,
  output: HasSavedAccount.outputSchema,
  context: { repository },
  asResult: false,
});
