import { Meta, StoryObj } from "@storybook/react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {
  MultiStep as Component,
  withMultiStepControls,
  withMultiStepCount,
} from "./MultiStep";

export default {
  id: "shared/components/layout/MultiStep",
  component: Component,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

const PageCounter = withMultiStepCount((props) => {
  const { activePageIndex = 0, pageCount = 0 } = props;
  return (
    <Grid direction="row" container justifyContent="space-evenly">
      {Array.from({ length: pageCount }).map((_, index) => {
        return (
          <Grid key={index} item>
            <Box
              sx={{
                size: 1,
                borderRadius: "50%",
                bgcolor:
                  index === activePageIndex ? "primary.main" : "primary.100",
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
});

const Page1Controls = withMultiStepControls((props) => {
  return (
    <Button type="button" onClick={() => props.navigateTo("Page 2")} fullWidth>
      Go to page 2
    </Button>
  );
});

const Page1 = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", h: "100%" }}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>Page 1</Typography>
      </Box>
      <Page1Controls />
    </Box>
  );
};

const Page2Controls = withMultiStepControls((props) => {
  return (
    <Button type="button" onClick={() => props.navigateTo("Page 1")} fullWidth>
      Go to page 1
    </Button>
  );
});

const Page2 = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", h: "100%" }}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Page 2</p>
      </Box>
      <Page2Controls />
    </Box>
  );
};

export const MultiStep: Story = {
  render() {
    return (
      <Component
        sx={{
          size: 40,
          bgcolor: "shades.white",
          p: 5,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <PageCounter />
        <Component.Page id="Page 1" sx={{ h: "100%" }}>
          <Page1 />
        </Component.Page>
        <Component.Page id="Page 2" sx={{ h: "100%" }}>
          <Page2 />
        </Component.Page>
      </Component>
    );
  },
};
