import Box, { BoxProps } from "@mui/material/Box";

import { Blob } from "@/shared/components/Blob";
import { FULLSCREEN_VARIANTS } from "./constants";

type Variant = (typeof FULLSCREEN_VARIANTS)[keyof typeof FULLSCREEN_VARIANTS];

interface FullScreenProps extends BoxProps {
  variant?: Variant;
}

export function FullScreen({
  sx,
  variant = FULLSCREEN_VARIANTS.DEFAULT,
  children,
  ...rest
}: FullScreenProps) {
  if (variant === FULLSCREEN_VARIANTS.BRAND) {
    return (
      <Box
        sx={{
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          maxWidth: "100vw",
          maxHeight: "100vh",
          position: "relative",
          ...sx,
        }}
        {...rest}
      >
        <Blob
          position="absolute"
          zIndex={-1}
          top={0 - 433 / 2}
          left={{
            md: 10 - 433 / 2,
            xs: "initial",
          }}
          right={{
            md: "initial",
            xs: 10 - 433 / 2,
          }}
          sx={{
            transform: {
              xs: "rotate(180deg)",
              md: "rotate(0deg)",
            },
          }}
        />
        <>{children}</>
        <Blob
          position="absolute"
          bottom={0 - 433 / 2}
          right={10 - 433 / 2}
          display={{ xs: "none", lg: "initial" }}
        />
      </Box>
    );
  }
  if (variant === FULLSCREEN_VARIANTS.DEFAULT)
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          ...sx,
        }}
        {...rest}
      >
        {children}
      </Box>
    );
}
