import { Repository } from "@/modules/accounts/repository";

export { schema as inputSchema } from "./input";
export type { Input } from "./input";
export { schema as outputSchema } from "./output";
export type { Output } from "./output";
export type Context = {
  repository: Repository;
};
