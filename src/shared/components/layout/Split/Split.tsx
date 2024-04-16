import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import { Theme, useTheme } from "@mui/material/styles";

/**
 * An object containing CSS grid fractions for use in the Split component.
 * @readonly
 * @enum {string}
 * @property {"1fr 3fr"} "1/4" - Represents a grid with a 1/4 fraction.
 * @property {"1fr 2fr"} "1/3" - Represents a grid with a 1/3 fraction.
 * @property {"1fr 1fr"} "1/2" - Represents a grid with a 1/2 fraction.
 * @property {"2fr 1fr"} "2/3" - Represents a grid with a 2/3 fraction.
 * @property {"3fr 1fr"} "3/4" - Represents a grid with a 3/4 fraction.
 * @property {"auto 1fr"} "auto-start" - Represents a grid with an auto-start fraction.
 * @property {"1fr auto"} "auto-end" - Represents a grid with an auto-end fraction.
 */
const FRACTIONS = {
  "1": "1fr",
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
} as const;

type Fraction = keyof typeof FRACTIONS;

type MuiSizes = "xs" | "sm" | "md" | "lg" | "xl";
interface SplitProps extends BoxProps {
  gutter?: number;
  fraction?:
    | Fraction
    | {
        [_key in MuiSizes]?: Fraction;
      };
}

function applyResponsiveFraction(theme: Theme, { fraction }: Pick<SplitProps, "fraction">) {
  if (typeof fraction === "string") {
    return FRACTIONS[fraction];
  }
  if (!fraction) return "1fr 1fr";
  return theme.breakpoints.keys.reduce(
    (acc, key) => {
      const fractionForBreakpoint = fraction[key];
      if (fractionForBreakpoint) {
        acc[key] = FRACTIONS[fractionForBreakpoint];
      }
      return acc;
    },
    {} as Record<MuiSizes, string>,
  );
}

/**
 * A component that splits its children into two columns with a gutter.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children to be split into two columns.
 * @param {number} [props.gutter=0] - The size of the gutter between the two columns.
 * @param {string} [props.fraction="1/2"] - The fraction of the width of each column. Must be a string in the format "n/m", where n and m are integers.
 * @param {Object} [props.sx] - The sx prop from Theme UI.
 * @returns {JSX.Element} - The Split component.
 * @throws {Error} - Throws an error if the component does not have exactly 2 children.
 */
export function Split({ children, gutter = 0, fraction = "1/2", sx, ...props }: SplitProps) {
  const theme = useTheme();
  theme.spacing(gutter);
  const childrenArray = React.Children.toArray(children);
  const hasTwoChildren = childrenArray.length === 2;
  if (!hasTwoChildren) {
    throw new Error("Split component must have exactly 2 children");
  }
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: applyResponsiveFraction(theme, { fraction }),
        gap: theme.spacing(gutter),
        w: "100%",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
