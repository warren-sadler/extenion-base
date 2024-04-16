import Stack, { StackProps } from "@mui/material/Stack";

export type HStackProps = Omit<StackProps, "direction">;

export function HStack({ children, ...rest }: HStackProps) {
  return (
    <Stack direction="row" {...rest}>
      {children}
    </Stack>
  );
}
