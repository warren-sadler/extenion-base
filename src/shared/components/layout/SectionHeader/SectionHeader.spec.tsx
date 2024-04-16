import { render, screen } from "@testing-library/react";
import { SectionHeader } from "./SectionHeader";

describe("SectionHeader", function () {
  it("should render title", function () {
    render(<SectionHeader title="Hello World" />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("should render subtitle", function () {
    render(<SectionHeader title="Hello World" subtitle="This is a subtitle" />);
    expect(screen.getByText("This is a subtitle")).toBeInTheDocument();
  });
});
