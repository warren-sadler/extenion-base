import { render } from "@testing-library/react";
import { VStack } from "./VStack";

describe("VStack", function () {
  it("should render", function () {
    const { container } = render(<VStack />);
    expect(container).toBeDefined();
  });
  it("should have expected styling", function () {
    const { container } = render(<VStack />);
    expect(container.firstChild).toHaveStyle({
      display: "flex",
    });
  });
});
