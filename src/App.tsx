import { TherifyLogo } from "./shared/components/TherifyLogo";
import { Center } from "./shared/components/layout/Center";
import { DisplayHeader } from "./shared/components/layout/DisplayHeader";
import { FullScreen } from "./shared/components/layout/FullScreen";
import { FULLSCREEN_VARIANTS } from "./shared/components/layout/FullScreen/constants";
import { VStack } from "./shared/components/layout/stack/VStack";

export function App() {
  return (
    <FullScreen
      variant={FULLSCREEN_VARIANTS.BRAND}
      sx={{ minHeight: 400, minWidth: 400 }}
    >
      <VStack
        sx={{ bgcolor: "shades.white", p: 8, borderRadius: 4 }}
        boxShadow={1}
      >
        <Center>
          <TherifyLogo />
        </Center>
        <DisplayHeader title="Therify Explains" />
      </VStack>
    </FullScreen>
  );
}
