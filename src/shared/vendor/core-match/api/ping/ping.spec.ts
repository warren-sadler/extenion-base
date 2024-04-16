import { ping } from "./ping";

describe("ping", function () {
  it("should return 'pong'", function () {
    ping().then((res) => {
      expect(res.message).toBe("pong");
    });
  });
});
