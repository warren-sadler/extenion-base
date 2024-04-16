import { render } from "@testing-library/react";
import { HStack } from "./HStack";

describe("HStack", function () {
  it("should render", function () {
    const { container } = render(<HStack />);
    expect(container).toBeDefined();
  });
  it("should have expected styling", function () {
    const { container } = render(<HStack />);
    expect(container.firstChild).toHaveStyle({
      display: "flex",
    });
  });
});
