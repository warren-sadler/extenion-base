import { render, screen } from "@testing-library/react";
import { HelloWorld } from "./HelloWorld";

describe("HelloWorld", function () {
  it("should render the component", function () {
    render(<HelloWorld />);
    const heading = screen.getByRole("heading", { name: /hello world/i });
    expect(heading).toBeInTheDocument();
  });
});
