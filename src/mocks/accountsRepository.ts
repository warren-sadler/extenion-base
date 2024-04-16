import { beforeEach } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended";

import { Repository } from "@/modules/accounts/repository";

beforeEach(() => {
  mockReset(mockAccountsRepository);
});

export const mockAccountsRepository = mockDeep<Repository>();
