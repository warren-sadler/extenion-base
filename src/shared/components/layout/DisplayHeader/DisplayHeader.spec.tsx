import { render } from "@testing-library/react";
import { DisplayHeader } from "./DisplayHeader";

describe("DisplayHeader", function () {
  const testProps = {
    title: "Test",
  };
  it("should render a title", function () {
    const { getByTestId } = render(<DisplayHeader {...testProps} />);
    expect(getByTestId("section-title")).toBeDefined();
  });
  it("should render a subtitle", function () {
    const { getByTestId } = render(<DisplayHeader {...testProps} subtitle="Subtitle" />);
    expect(getByTestId("section-subtitle")).toBeDefined();
  });
});
