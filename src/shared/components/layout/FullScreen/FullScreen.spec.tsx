import { render } from "@testing-library/react";
import { FullScreen } from "./FullScreen";

describe("FullScreen", () => {
  it("should render", () => {
    const { container } = render(
      <FullScreen>
        <div>Test</div>
      </FullScreen>,
    );
    expect(container).toBeDefined();
  });
  it("should have expected styling", () => {
    const { container } = render(
      <FullScreen>
        <div>Test</div>
      </FullScreen>,
    );
    expect(container.firstChild).toHaveStyle({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
    });
  });
});
