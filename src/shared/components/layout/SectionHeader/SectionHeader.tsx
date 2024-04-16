import { SxProps } from "@mui/system";

import { VStack } from "../stack/VStack";
import { BodyLarge, BodyMedium } from "../../Typography";

interface SectionHeaderProps {
  title: string;
  titleSx?: SxProps;
  subtitle?: string;
  subtitleSx?: SxProps;
}

export function SectionHeader({
  title,
  subtitle,
  titleSx,
  subtitleSx,
}: SectionHeaderProps) {
  return (
    <VStack>
      <BodyLarge
        sx={{
          fontWeight: "bold",
          ...titleSx,
        }}
      >
        {title}
      </BodyLarge>
      {subtitle ?? (
        <BodyMedium
          sx={{
            ...subtitleSx,
          }}
        >
          {subtitle}
        </BodyMedium>
      )}
    </VStack>
  );
}
