import { render } from "@testing-library/react";
import { Split } from "./Split";

describe("Split", () => {
  it("should render two children", () => {
    const { container } = render(
      <Split>
        <div>Child 1</div>
        <div>Child 2</div>
      </Split>,
    );
    expect(container.children.length).toBe(1);
    expect(container.firstChild?.childNodes.length).toBe(2);
  });

  it("should throw an error if not given exactly two children", () => {
    // Even though the error is caught, it still gets printed to the console
    // so we mock that out to avoid the wall of text from a passing test.
    const spy = vitest.spyOn(console, "error");
    spy.mockImplementation(() => {});

    expect(() =>
      render(
        <Split>
          <div>Child 1</div>
        </Split>,
      ),
    ).toThrow("Split component must have exactly 2 children");

    expect(() =>
      render(
        <Split>
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
        </Split>,
      ),
    ).toThrow("Split component must have exactly 2 children");

    spy.mockRestore();
  });

  it("should apply gutter and fraction props", () => {
    const { container } = render(
      <Split gutter={2} fraction="1/3">
        <div>Child 1</div>
        <div>Child 2</div>
      </Split>,
    );
    expect(container.firstChild).toHaveStyle({
      gridTemplateColumns: "1fr 2fr",
      gap: "16px",
    });
  });
});
