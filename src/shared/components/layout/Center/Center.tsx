import { forwardRef } from "react";
import Box, { BoxProps } from "@mui/material/Box";

interface CenterProps extends BoxProps {}

const CenterWithRef: React.ForwardRefRenderFunction<HTMLElement, CenterProps> = ({ children, sx, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

/* in order for this component to be used inside a material modal, it should accept a ref */
export const Center = forwardRef<HTMLElement, CenterProps>(CenterWithRef);
