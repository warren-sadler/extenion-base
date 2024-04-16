import Stack, { StackProps } from "@mui/material/Stack";

export type VStackProps = Omit<StackProps, "direction">;

export function VStack({ children, ...rest }: VStackProps) {
  return (
    <Stack direction="column" spacing={2} {...rest}>
      {children}
    </Stack>
  );
}
