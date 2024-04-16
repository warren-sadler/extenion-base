import { act, render, screen, waitFor } from "@testing-library/react";
import { MultiStep, withMultiStepControls } from "./MultiStep";

describe("MultiStep", function () {
  test("initial page should be rendered", function () {
    render(
      <MultiStep>
        <MultiStep.Page id="page-1">
          <p data-testid="test-1">test-1</p>
        </MultiStep.Page>
        <MultiStep.Page id="page-2">
          <p data-testid="test-2">test-2</p>
        </MultiStep.Page>
      </MultiStep>,
    );
    expect(screen.getByTestId("test-1")).toBeVisible();
    expect(screen.queryByTestId("test-2")).not.toBeInTheDocument();
  });
  test("page should be rendered when clicked", async function () {
    const NextControls = withMultiStepControls((props) => {
      return (
        <button type="button" onClick={() => props.navigateTo("page-2")}>
          Next
        </button>
      );
    });
    render(
      <MultiStep>
        <MultiStep.Page id="page-1">
          <NextControls />
          <p data-testid="test-1">test-1</p>
        </MultiStep.Page>
        <MultiStep.Page id="page-2">
          <p data-testid="test-2">test-2</p>
        </MultiStep.Page>
      </MultiStep>,
    );
    expect(screen.getByTestId("test-1")).toBeVisible();
    expect(screen.queryByTestId("test-2")).not.toBeInTheDocument();
    act(() => {
      screen.getByRole("button").click();
    });
    await waitFor(() => {
      expect(screen.queryByTestId("test-1")).not.toBeInTheDocument();
      expect(screen.getByTestId("test-2")).toBeVisible();
    });
  });
});
