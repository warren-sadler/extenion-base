import { defineServiceMethod } from "@/shared/utils/define-service-method";

import { UpdateAccount } from "./feature";
import { implementation } from "./updateAccount";

import { repository } from "../../repository";

export const updateAccount = defineServiceMethod({
  input: UpdateAccount.inputSchema,
  output: UpdateAccount.outputSchema,
  implementation,
  context: {
    repository,
  },
});
