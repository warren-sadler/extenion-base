import { Center } from "../Center";
import { VStack } from "../stack/VStack";
import { FullScreen } from "../FullScreen";

import { TherifyLogo } from "../../TherifyLogo";

interface FormLayoutProps {
  children: React.ReactNode;
}

export function FormLayout({ children }: FormLayoutProps) {
  return (
    <FullScreen variant="brand">
      <VStack>
        <Center>
          <TherifyLogo />
        </Center>
        <Center
          sx={{
            bgcolor: "shades.white",
            p: { xs: "2.5rem", md: "7.6875rem" },
            minWidth: {
              xs: "90%",
              md: "50%",
            },
          }}
        >
          {children}
        </Center>
      </VStack>
    </FullScreen>
  );
}
