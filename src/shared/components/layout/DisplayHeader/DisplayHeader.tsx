import { ReactElement } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

import { VStack, VStackProps } from "../stack/VStack";

interface DisplayHeaderProps extends Omit<VStackProps, "component" | "title"> {
  title: string | ReactElement;
  subtitle?: string | ReactElement;
  titleOverrides?: TypographyProps;
  subtitleOverrides?: TypographyProps;
}

export function DisplayHeader({
  title,
  subtitle,
  titleOverrides,
  subtitleOverrides,
  ...rest
}: DisplayHeaderProps) {
  return (
    <VStack component="header" spacing={1} {...rest}>
      <Typography variant="h2" {...titleOverrides} data-testid="section-title">
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          {...subtitleOverrides}
          data-testid="section-subtitle"
        >
          {subtitle}
        </Typography>
      )}
    </VStack>
  );
}
