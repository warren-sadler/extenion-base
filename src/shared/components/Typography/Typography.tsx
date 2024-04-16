import Typography, { TypographyProps } from "@mui/material/Typography";

export function DisplayLarge(props: TypographyProps) {
  return <Typography {...props} variant="display1" />;
}

export function DisplayMedium(props: TypographyProps) {
  return <Typography {...props} variant="display2" />;
}

export function DisplaySmall(props: TypographyProps) {
  return <Typography {...props} variant="display3" />;
}

export function H1({ variant, ...props }: Omit<TypographyProps<"h1">, "component">) {
  return <Typography {...props} component="h1" variant={variant ?? "h1"} />;
}

export function H2({ variant, ...props }: Omit<TypographyProps<"h2">, "component">) {
  return <Typography {...props} component="h2" variant={variant ?? "h2"} />;
}

export function H3({ variant, ...props }: Omit<TypographyProps<"h3">, "component">) {
  return <Typography {...props} component="h3" variant={variant ?? "h3"} />;
}

export function H4({ variant, ...props }: Omit<TypographyProps<"h4">, "component">) {
  return <Typography {...props} component="h4" variant={variant ?? "h4"} />;
}

export function H5({ variant, ...props }: Omit<TypographyProps<"h5">, "component">) {
  return <Typography {...props} component="h5" variant={variant ?? "h5"} />;
}

export function H6({ variant, ...props }: Omit<TypographyProps<"h6">, "component">) {
  return <Typography {...props} component="h6" variant={variant ?? "h6"} />;
}

export function SubheadLarge(props: TypographyProps) {
  return <Typography {...props} variant="subhead1" />;
}

export function SubheadMedium(props: TypographyProps) {
  return <Typography {...props} variant="subhead2" />;
}

export function SubheadSmall(props: TypographyProps) {
  return <Typography {...props} variant="subhead3" />;
}

export function SubheadXSmall(props: TypographyProps) {
  return <Typography {...props} variant="subhead4" />;
}

export function BodyLarge(props: TypographyProps) {
  return <Typography {...props} variant="body1" />;
}

export function BodyMedium(props: TypographyProps) {
  return <Typography {...props} variant="body2" />;
}

export function Paragraph(props: TypographyProps) {
  return <Typography {...props} variant="body2" />;
}

export function BodySmall(props: TypographyProps) {
  return <Typography {...props} variant="body3" />;
}

export function BodyXSmall(props: TypographyProps) {
  return <Typography {...props} variant="body4" />;
}

export function CaptionLarge(props: TypographyProps) {
  return <Typography {...props} variant="caption1" />;
}

export function CaptionMedium(props: TypographyProps) {
  return <Typography {...props} variant="caption2" />;
}

export function OverlineLarge(props: TypographyProps) {
  return <Typography {...props} variant="overline1" />;
}

export function OverlineMedium(props: TypographyProps) {
  return <Typography {...props} variant="overline2" />;
}

export function OverlineSmall(props: TypographyProps) {
  return <Typography {...props} variant="overline3" />;
}
