"use client";
import React from "react";
import createCache from "@emotion/cache";
import { css } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./index";

const globalStyles = (
  <GlobalStyles
    styles={css`
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}
  />
);
// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry(
  props: React.PropsWithChildren<{
    options: Parameters<typeof createCache>[0];
  }>
) {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      {children}
    </ThemeProvider>
  );
}
