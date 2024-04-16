import { implementation as hasSavedAccount } from "./hasSavedAccount";
import { mockAccountsRepository } from "@/mocks/accountsRepository";

describe("hasSavedAccount", function () {
  it("should return false if there is no account saved", function () {
    mockAccountsRepository.Accounts.get.mockResolvedValue(null);
    expect(
      hasSavedAccount({}, { repository: mockAccountsRepository }),
    ).resolves.toBe(false);
  });
});
