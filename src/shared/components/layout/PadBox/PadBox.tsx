import Box, { BoxProps } from "@mui/material/Box";

type CSSUnit =
  | "px"
  | "em"
  | "rem"
  | "%"
  | "ch"
  | "ex"
  | "cm"
  | "mm"
  | "in"
  | "pt"
  | "pc"
  | "vw"
  | "vh"
  | "vmin"
  | "vmax";

interface PadBoxProps extends BoxProps {
  padding?: `${string}${CSSUnit}`[];
}

export function PadBox({ padding = [], children, sx }: PadBoxProps) {
  return (
    <Box
      sx={{
        p: padding?.join(" "),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
