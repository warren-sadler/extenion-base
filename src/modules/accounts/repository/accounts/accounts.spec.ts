import { Account } from "../../types/account";
import { KEY, get } from "./accounts";

describe("get", function () {
  describe("when there is no account saved", function () {
    it("should return null", function () {
      expect(get()).toBe(null);
    });
  });
  describe("when there is an account saved", function () {
    const TEST_ACCOUNT = Account.random();
    beforeAll(function () {
      window.localStorage.setItem(KEY, JSON.stringify(TEST_ACCOUNT));
    });
    it("should return the saved account", function () {
      expect(get()).toEqual(TEST_ACCOUNT);
    });
    afterAll(function () {
      window.localStorage.removeItem(KEY);
    });
  });
});
