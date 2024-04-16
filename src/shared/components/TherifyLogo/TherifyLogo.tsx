import { styled } from "@/shared/styles/theme";
import Box, { BoxProps } from "@mui/material/Box";

const IMAGE_SIZES = {
  small: {
    width: 152,
    height: 52,
  },
  medium: {
    width: 228,
    height: 78,
  },
  large: {
    width: 304,
    height: 104,
  },
} as const;

interface TherifyLogoProps extends BoxProps {
  size?: keyof typeof IMAGE_SIZES;
}

export function TherifyLogo({ size = "small", sx }: TherifyLogoProps) {
  const imageDimensions = IMAGE_SIZES[size];
  return (
    <Box sx={{ display: "inline-block", ...sx }}>
      <StyledImage
        alt="Therify Logo"
        {...imageDimensions}
        src="https://res.cloudinary.com/dbrkfldqn/image/upload/v1673453089/app.therify.co/logo/therify-logo_wqj1is.png"
      />
    </Box>
  );
}

const StyledImage = styled("img")({});
