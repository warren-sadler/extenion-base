import { render } from "@testing-library/react";
import { TherifyLogo } from "./TherifyLogo";

describe("TherifyLogo", () => {
  const ALT_TEXT = "Therify Logo";
  it("renders the Therify logo", () => {
    const { getByAltText } = render(<TherifyLogo />);
    const logo = getByAltText(ALT_TEXT);
    expect(logo).toBeInTheDocument();
  });

  it("has the correct dimensions", () => {
    const { getByAltText } = render(<TherifyLogo />);
    const logo = getByAltText(ALT_TEXT);
    expect(logo).toHaveAttribute("width", "152");
    expect(logo).toHaveAttribute("height", "52");
  });
});
