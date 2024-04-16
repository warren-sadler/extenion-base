import { createStyled, handleBreakpoints } from "@mui/system";
import {
  createTheme,
  ThemeOptions,
  Components,
  Theme,
} from "@mui/material/styles";

interface TherifyPalette {
  0?: string;
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  main?: string;
  light?: string;
  dark?: string;
}
declare module "@mui/material/styles" {
  interface Palette {
    neutral: {
      black: TherifyPalette & Palette["primary"];
      brown: TherifyPalette & Palette["primary"];
    };
    brandSecondary: {
      orange: TherifyPalette & Palette["primary"];
      teal: TherifyPalette & Palette["primary"];
      purple: TherifyPalette & Palette["primary"];
      pink: TherifyPalette & Palette["primary"];
      peach: TherifyPalette & Palette["primary"];
    };
    shades: {
      black: string;
      white: string;
    };
  }
  interface PaletteOptions {
    neutral: {
      black: PaletteOptions["primary"];
      brown: PaletteOptions["primary"];
    };
    brandSecondary: {
      orange: PaletteOptions["primary"];
      teal: PaletteOptions["primary"];
      purple: PaletteOptions["primary"];
      pink: PaletteOptions["primary"];
      peach: PaletteOptions["primary"];
    };
    shades: {
      black: string;
      white: string;
    };
  }
  export interface TypographyVariants {
    display1: React.CSSProperties;
    display2: React.CSSProperties;
    display3: React.CSSProperties;
    subhead1: React.CSSProperties;
    subhead2: React.CSSProperties;
    subhead3: React.CSSProperties;
    subhead4: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    overline1: React.CSSProperties;
    overline2: React.CSSProperties;
    overline3: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
  }
  export interface TypographyVariantsOptions {
    display1?: React.CSSProperties;
    display2?: React.CSSProperties;
    display3?: React.CSSProperties;
    subhead1?: React.CSSProperties;
    subhead2?: React.CSSProperties;
    subhead3?: React.CSSProperties;
    subhead4?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    overline1?: React.CSSProperties;
    overline2?: React.CSSProperties;
    overline3?: React.CSSProperties;
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {
    display1: true;
    display2: true;
    display3: true;
    subhead1: true;
    subhead2: true;
    subhead3: true;
    subhead4: true;
    caption1: true;
    caption2: true;
    overline1: true;
    overline2: true;
    overline3: true;
    body3: true;
    body4: true;
  }
}

/* -------------------------------------------------------------------------- */
/*                                Color Palette                               */
/* -------------------------------------------------------------------------- */

// #region Color Palette

/* ------------------------------- Color Constants -------------------------- */
const COLOR_WHITE = "hsla(0, 0%, 100%, 1)" as const;

/* ------------------------------- Typography ------------------------------- */
export const TEXT_DARK = "hsla(28, 27%, 11%, 1)";
export const TEXT_LIGHT = COLOR_WHITE;

/* -------------------------------- Neutrals -------------------------------- */
// These colors are used as supporting secondary colors in backgrounds, text colors, seperators, models, etc.
export const NEUTRAL_BLACK = {
  [0]: TEXT_LIGHT,
  [50]: "hsla(0, 0%, 96%, 1)",
  [100]: "hsla(0, 0%, 90%, 1)",
  [200]: "hsla(0, 0%, 80%, 1)",
  [300]: "hsla(0, 0%, 70%, 1)",
  [400]: "hsla(0, 0%, 60%, 1)",
  [500]: "hsla(0, 0%, 50%, 1)",
  [600]: "hsla(0, 0%, 40%, 1)",
  [700]: "hsla(0, 0%, 30%, 1)",
  [800]: "hsla(0, 0%, 20%, 1)",
  [900]: "hsla(0, 0%, 10%, 1)",
  main: "hsla(0, 0%, 50%, 1)",
  light: "hsla(0, 0%, 90%, 1)",
  dark: "hsla(0, 0%, 10%, 1)",
} as const;

export const NEUTRAL_BROWN = {
  [0]: "hsla(24, 19%, 94%, 1)", // [0] is used for text on dark backgrounds
  [50]: "hsla(24, 19%, 94%, 1)",
  [100]: "hsla(24, 17%, 89%, 1)",
  [200]: "hsla(27, 10%, 79%, 1)",
  [300]: "hsla(22, 7%, 70%, 1)",
  [400]: "hsla(16, 5%, 60%, 1)",
  [500]: "hsla(18, 5%, 51%, 1)",
  [600]: "hsla(14, 6%, 41%, 1)",
  [700]: "hsla(9, 8%, 32%, 1)",
  [800]: "hsla(13, 12%, 22%, 1)",
  [900]: "hsla(9, 21%, 13%, 1)",
  main: "hsla(18, 5%, 51%, 1)",
  light: "hsla(24, 17%, 89%, 1)",
  dark: "hsla(9, 21%, 13%, 1)",
} as const;

/* --------------------------------- Primary -------------------------------- */
// The primary color palette is used across all interactive elements such as CTAs, links, inputs, active states, etc.
export const PRIMARY_COLOR = {
  [50]: "hsla(28, 50%, 90%, 1)",
  [100]: "hsla(29, 51%, 85%, 1)",
  [200]: "hsla(28, 52%, 75%, 1)",
  [300]: "hsla(27, 51%, 70%, 1)",
  [400]: "hsla(28, 51%, 65%, 1)",
  [500]: "hsla(28, 33%, 54%, 1)",
  [600]: "hsla(27, 28%, 43%, 1)",
  [700]: "hsla(28, 28%, 32%, 1)",
  [800]: "hsla(29, 28%, 21%, 1)",
  [900]: "hsla(28, 27%, 11%, 1)",
} as const;

/* ---------------------------- Secondary Colors ---------------------------- */
// The secondary color palette is used for backgrounds and instances

export const ORANGE = {
  [0]: "hsla(26, 100%, 95%, 1)",
  [50]: "hsla(24, 100%, 90%, 1)",
  [100]: "hsla(25, 100%, 85%, 1)",
  [200]: "hsla(24, 100%, 81%, 1)",
  [300]: "hsla(25, 100%, 76%, 1)",
  [400]: "hsla(25, 42%, 57%, 1)",
  [500]: "hsla(25, 32%, 38%, 1)",
  [600]: "hsla(25, 32%, 19%, 1)",
} as const;

export const TEAL = {
  [0]: "hsla(192, 22%, 91%, 1)",
  [50]: "hsla(198, 22%, 82%, 1)",
  [100]: "hsla(196, 22%, 73%, 1)",
  [200]: "hsla(198, 22%, 65%, 1)",
  [300]: "hsla(198, 22%, 65%, 1)",
  [400]: "hsla(196, 17%, 42%, 1)",
  [500]: "hsla(197, 17%, 28%, 1)",
  [600]: "hsla(198, 18%, 14%, 1)",
} as const;

export const PURPLE = {
  [0]: "hsla(245, 50%, 95%, 1)",
  [50]: "hsla(248, 50%, 91%, 1)",
  [100]: "hsla(246, 52%, 86%, 1)",
  [200]: "hsla(247, 52%, 81%, 1)",
  [300]: "hsla(247, 51%, 77%, 1)",
  [400]: "hsla(247, 21%, 58%, 1)",
  [500]: "hsla(246, 15%, 38%, 1)",
  [600]: "hsla(248, 16%, 19%, 1)",
} as const;

export const PINK = {
  [0]: "hsla(328, 62%, 96%, 1)",
  [50]: "hsla(328, 62%, 92%, 1)",
  [100]: "hsla(328, 59%, 88%, 1)",
  [200]: "hsla(328, 60%, 84%, 1)",
  [300]: "hsla(328, 60%, 79%, 1)",
  [400]: "hsla(328, 23%, 60%, 1)",
  [500]: "hsla(327, 15%, 40%, 1)",
  [600]: "hsla(328, 15%, 20%, 1)",
} as const;

export const PEACH = {
  [0]: "hsla(12, 91%, 96%, 1)",
  [50]: "hsla(11, 91%, 92%, 1)",
  [100]: "hsla(10, 91%, 87%, 1)",
  [200]: "hsla(10, 91%, 83%, 1)",
  [300]: "hsla(10, 91%, 79%, 1)",
  [400]: "hsla(11, 35%, 59%, 1)",
  [500]: "hsla(11, 24%, 39%, 1)",
  [600]: "hsla(10, 25%, 20%, 1)",
} as const;

/* ----------------------------- Stateful Colors ---------------------------- */

export const SUCCESS = {
  [50]: "hsla(125, 28%, 92%, 1)",
  [100]: "hsla(129, 30%, 82%, 1)",
  [200]: "hsla(129, 29%, 72%, 1)",
  [300]: "hsla(129, 30%, 63%, 1)",
  [400]: "hsla(129, 29%, 58%, 1)",
  [500]: "hsla(129, 29%, 54%, 1)",
  [600]: "hsla(129, 25%, 49%, 1)",
  [700]: "hsla(129, 25%, 43%, 1)",
  [800]: "hsla(129, 25%, 32%, 1)",
  [900]: "hsla(129, 25%, 22%, 1)",
} as const;

export const WARNING = {
  [50]: "hsla(41, 70%, 95%, 1)",
  [100]: "hsla(41, 69%, 87%, 1)",
  [200]: "hsla(42, 69%, 81%, 1)",
  [300]: "hsla(42, 69%, 75%, 1)",
  [400]: "hsla(42, 70%, 71%, 1)",
  [500]: "hsla(42, 69%, 68%, 1)",
  [600]: "hsla(42, 52%, 61%, 1)",
  [700]: "hsla(42, 39%, 55%, 1)",
  [800]: "hsla(42, 33%, 41%, 1)",
  [900]: "hsla(41, 32%, 27%, 1)",
} as const;

export const ERROR = {
  [50]: "hsla(11, 63%, 95%, 1)",
  [100]: "hsla(8, 61%, 93%, 1)",
  [200]: "hsla(11, 62%, 86%, 1)",
  [300]: "hsla(10, 63%, 79%, 1)",
  [400]: "hsla(11, 63%, 72%, 1)",
  [500]: "hsla(10, 62%, 68%, 1)",
  [600]: "hsla(10, 62%, 65%, 1)",
  [700]: "hsla(10, 48%, 58%, 1)",
  [800]: "hsla(11, 37%, 52%, 1)",
  [900]: "hsla(10, 34%, 39%, 1)",
} as const;

/* --------------------------------- Shades --------------------------------- */

export const SHADES = {
  WHITE: COLOR_WHITE,
  BLACK: "hsla(0, 0%, 0%, 1)",
} as const;

export const BACKGROUND = {
  PAPER: COLOR_WHITE,
  DEFAULT: "hsla(30, 100%, 98%, 1)",
} as const;

export const PALETTE: ThemeOptions["palette"] = {
  background: {
    paper: BACKGROUND.PAPER,
    default: BACKGROUND.DEFAULT,
  },
  primary: {
    ...PRIMARY_COLOR,
    main: PRIMARY_COLOR[400],
    light: PRIMARY_COLOR[100],
    dark: PRIMARY_COLOR[500],
    contrastText: SHADES.WHITE,
  },
  neutral: {
    black: NEUTRAL_BLACK,
    brown: NEUTRAL_BROWN,
  },
  brandSecondary: {
    orange: ORANGE,
    teal: TEAL,
    purple: PURPLE,
    pink: PINK,
    peach: PEACH,
  },
  shades: {
    black: SHADES.BLACK,
    white: SHADES.WHITE,
  },
  text: {
    primary: TEXT_DARK,
    disabled: NEUTRAL_BLACK[400],
  },
  error: {
    main: ERROR[500],
    light: ERROR[100],
    dark: ERROR[900],
    ...ERROR,
  },
  warning: {
    main: WARNING[500],
    light: WARNING[100],
    dark: WARNING[900],
    ...WARNING,
  },
  success: {
    main: SUCCESS[500],
    light: SUCCESS[100],
    dark: SUCCESS[900],
    ...SUCCESS,
  },
  info: {
    ...NEUTRAL_BLACK,
    contrastText: SHADES.WHITE,
    main: NEUTRAL_BLACK[400],
    dark: NEUTRAL_BLACK[500],
  },
} as const;

// #endregion

/* -------------------------------------------------------------------------- */
/*                                 Typography                                 */
/* -------------------------------------------------------------------------- */

// #region Typography

const ROBOTO_STYLES = {
  fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
  fontWeight: 400,
  color: NEUTRAL_BROWN[900],
};

const MACKINAC_STYLES = {
  fontFamily: 'Mackinac, "Helvetica Neue", Arial, sans-serif',
  fontWeight: 700,
  color: NEUTRAL_BROWN[900],
};

// We use the base theme to extend the default typography styles
const BASE_THEME = createTheme();

export const TYPOGRAPHY: ThemeOptions["typography"] = {
  fontSize: 16,
  display1: {
    ...MACKINAC_STYLES,
    fontSize: "6rem",
    lineHeight: "7.125rem",
  },
  display2: {
    ...MACKINAC_STYLES,
    fontSize: "4.5rem",
    lineHeight: "5.375rem",
  },
  display3: {
    ...MACKINAC_STYLES,
    fontSize: "4rem",
    lineHeight: "4.75rem",
  },
  subhead1: {
    ...BASE_THEME.typography.h1,
    ...ROBOTO_STYLES,
    fontSize: "2.25rem",
    lineHeight: "2.875rem",
  },
  subhead2: {
    ...BASE_THEME.typography.h2,
    ...ROBOTO_STYLES,
    fontSize: "1.875rem",
    lineHeight: "2.5rem",
  },
  subhead3: {
    ...BASE_THEME.typography.h3,
    ...ROBOTO_STYLES,
    fontSize: "1.625rem",
    lineHeight: "2.25rem",
  },
  subhead4: {
    ...BASE_THEME.typography.h4,
    ...ROBOTO_STYLES,
    fontSize: "1.375rem",
    lineHeight: "2rem",
  },
  caption1: {
    ...BASE_THEME.typography.body1,
    ...ROBOTO_STYLES,
    fontSize: "0.875rem",
    lineHeight: "1rem",
    fontStyle: "italic",
  },
  caption2: {
    ...BASE_THEME.typography.body1,
    ...ROBOTO_STYLES,
    fontSize: "0.75rem",
  },
  overline1: {
    ...BASE_THEME.typography.h6,
    ...ROBOTO_STYLES,
    fontSize: "1rem",
    lineHeight: "2rem",
    letterSpacing: ".1rem",
  },
  overline2: {
    ...BASE_THEME.typography.h6,
    ...ROBOTO_STYLES,
    fontSize: "0.875rem",
    lineHeight: "2rem",
    letterSpacing: ".0875rem",
  },
  overline3: {
    ...BASE_THEME.typography.h6,
    ...ROBOTO_STYLES,
    fontSize: "0.875rem",
    lineHeight: "2rem",
    letterSpacing: ".0875rem",
  },
  body3: {
    ...BASE_THEME.typography.body2,
    fontSize: "1rem",
    lineHeight: "1.625rem",
  },
  body4: {
    ...BASE_THEME.typography.body2,
    fontSize: "0.875rem",
    lineHeight: "1.5rem",
  },
};

export function applyTypography(theme: Theme) {
  // Body 1
  theme.typography.body1 = {
    ...theme.typography.body1,
    ...ROBOTO_STYLES,
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
  };
  // Body 2
  theme.typography.body2 = {
    ...theme.typography.body1,
    ...ROBOTO_STYLES,
    fontSize: "1rem",
    lineHeight: "1.625rem",
    ["&:last-child"]: {
      marginBottom: 0,
    },
  };
  // H1
  theme.typography.h1 = {
    ...theme.typography.h1,
    ...MACKINAC_STYLES,
    fontSize: "2.25rem",
    lineHeight: "2.68rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
      lineHeight: "3.5rem",
    },
  };
  // H2
  theme.typography.h2 = {
    ...theme.typography.h2,
    ...MACKINAC_STYLES,
    fontSize: "2rem",
    lineHeight: "2.375rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.25rem",
      lineHeight: "2.68rem",
    },
  };
  // H3
  theme.typography.h3 = {
    ...theme.typography.h3,
    ...MACKINAC_STYLES,
    fontSize: "1.5rem",
    lineHeight: "1.78rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
      lineHeight: "2.375rem",
    },
  };
  // H4
  theme.typography.h4 = {
    ...theme.typography.h4,
    ...MACKINAC_STYLES,
    fontSize: "1.5rem",
    lineHeight: "1.8125rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.75rem",
      lineHeight: "2.0625rem",
    },
  };
  // H5
  theme.typography.h5 = {
    ...theme.typography.h5,
    ...MACKINAC_STYLES,
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.625rem",
      lineHeight: "1.94rem",
    },
  };
  // H6
  theme.typography.h6 = {
    ...theme.typography.h6,
    ...MACKINAC_STYLES,
    fontSize: "0.875rem",
    lineHeight: "1.03rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.125rem",
      lineHeight: "1.3125rem",
    },
  };
}

// #endregion

/* -------------------------------------------------------------------------- */
/*                                   Shadows                                  */
/* -------------------------------------------------------------------------- */

// #region Shadows
// @see - https://stackoverflow.com/a/70969772
const SHADOWS: ThemeOptions["shadows"] = [...BASE_THEME.shadows];
SHADOWS[1] =
  "0px 4px 6px -1px rgba(50, 50, 71, 0.05), 0px 2px 4px -2px rgba(0, 0, 0, 0.15)";

// #endregion

/* -------------------------------------------------------------------------- */
/*                                 Components                                 */
/* -------------------------------------------------------------------------- */

// #region Components

const INPUT_BORDER_RADIUS = "0.25rem";
const INPUT_BACKGROUND_COLOR = NEUTRAL_BLACK[50];
// This is the background color for select inputs, not sure where it comes from
const INPUT_BACKGROUND_HOVER_COLOR = "rgba(0, 0, 0, 0.09)";
const INPUT_FONT_SIZE = "1rem";

export const MUI_SELECT: Components["MuiSelect"] = {
  defaultProps: {
    variant: "filled",
    defaultValue: "",
    disableUnderline: true,
  },
  styleOverrides: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      borderRadius: INPUT_BORDER_RADIUS,
      minWidth: "21.125rem",
      background: INPUT_BACKGROUND_COLOR,
      border: `1px solid ${NEUTRAL_BLACK[200]}`,
    },
  },
};

export const MUI_INPUT_BASE: Components["MuiInputBase"] = {
  styleOverrides: {
    root: {
      lineHeight: 1,
      "&.Mui-focused": {
        borderColor: `${NEUTRAL_BLACK[200]} !important`,
      },
      "&:hover": {
        borderColor: NEUTRAL_BLACK[50],
      },
    },
  },
};

export const MUI_INPUT_LABEL: Components["MuiInputLabel"] = {
  defaultProps: {
    disableAnimation: true,
    shrink: true,
  },
  styleOverrides: {
    root: {
      fontSize: "0.875rem",
    },
    asterisk: {
      color: ERROR[500],
    },
  },
};

const INPUT_PADDING = "0.8125rem 0.9375rem";

export const MUI_OUTLINED_INPUT: Components["MuiOutlinedInput"] = {
  defaultProps: {
    notched: false,
  },
  styleOverrides: {
    root: {
      borderRadius: INPUT_BORDER_RADIUS,
      fontSize: INPUT_FONT_SIZE,
      boxShadow: "none",
      background: INPUT_BACKGROUND_COLOR,
      border: `1px solid ${NEUTRAL_BLACK[200]}`,
      ["& .MuiOutlinedInput-notchedOutline"]: {
        border: "none",
      },
      ["& .MuiInputBase-input"]: {
        padding: INPUT_PADDING,
        ["& .MuiInputLabel-root"]: {
          display: "none",
        },
      },
    },
  },
};

export const MUI_INPUT: Components["MuiInput"] = {
  defaultProps: {
    disableUnderline: true,
  },
  styleOverrides: {
    root: {
      padding: INPUT_PADDING,
      borderRadius: INPUT_BORDER_RADIUS,
      background: INPUT_BACKGROUND_COLOR,
      border: `1px solid ${NEUTRAL_BLACK[200]}`,
      boxShadow: "none",
      fontSize: INPUT_FONT_SIZE,
      "& .MuiInputLabel-root": {
        display: "none",
      },
    },
  },
};

export const MUI_TEXT_FIELD: Components["MuiTextField"] = {
  styleOverrides: {
    root: {
      boxShadow: "none",
      ["& .MuiInputBase-input"]: {
        borderRadius: INPUT_BORDER_RADIUS,
        background: INPUT_BACKGROUND_COLOR,
        boxShadow: "none",
        border: `1px solid ${NEUTRAL_BLACK[200]}`,
      },
    },
  },
};

export const MUI_AUTOCOMPLETE: Components["MuiAutocomplete"] = {
  styleOverrides: {
    inputRoot: {
      padding: INPUT_PADDING,
      boxShadow: "none",
      borderRadius: INPUT_BORDER_RADIUS,
      background: INPUT_BACKGROUND_COLOR,
      border: `1px solid ${NEUTRAL_BLACK[200]}`,
      transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
      ["&:hover"]: {
        background: INPUT_BACKGROUND_HOVER_COLOR,
      },
      ["& .Mui-focused"]: {
        background: INPUT_BACKGROUND_COLOR,
      },
    },
    root: {
      ["& .MuiOutlinedInput-root .MuiAutocomplete-input"]: {
        padding: 0,
      },
    },
  },
};

export const MUI_TYPOGRAPHY_COMPONENT: Components["MuiTypography"] = {
  defaultProps: {
    variant: "body2",
  },
};

export const MUI_CARD_COMPONENT: Components["MuiCard"] = {
  defaultProps: {
    raised: false,
    elevation: 0,
  },
};

export const MUI_BUTTON_BASE_COMPONENT: Components["MuiButtonBase"] = {
  defaultProps: {
    disableRipple: true,
  },
};
export const MUI_BUTTON_COMPONENT: Components["MuiButton"] = {
  defaultProps: {
    sx: {
      textTransform: "none",
    },
    variant: "contained",
    color: "primary",
    disableElevation: true,
  },
};

export const MUI_AVATAR_COMPONENT: Components["MuiAvatar"] = {
  defaultProps: {
    sx: {
      bgcolor: PRIMARY_COLOR[50],
      color: PRIMARY_COLOR[500],
    },
  },
};

export const COMPONENTS: ThemeOptions["components"] = {
  MuiSelect: MUI_SELECT,
  MuiAvatar: MUI_AVATAR_COMPONENT,
  MuiCard: MUI_CARD_COMPONENT,
  MuiInput: MUI_INPUT,
  MuiTextField: MUI_TEXT_FIELD,
  MuiOutlinedInput: MUI_OUTLINED_INPUT,
  MuiInputBase: MUI_INPUT_BASE,
  MuiInputLabel: MUI_INPUT_LABEL,
  MuiAutocomplete: MUI_AUTOCOMPLETE,
  MuiTypography: MUI_TYPOGRAPHY_COMPONENT,
  MuiButtonBase: MUI_BUTTON_BASE_COMPONENT,
  MuiButton: MUI_BUTTON_COMPONENT,
};

// #endregion

/* -------------------------------------------------------------------------- */
/*                              Extended SX props                             */
/* -------------------------------------------------------------------------- */

// #region Extended SX props

/**
 * @description - This is a custom sx prop that allows you to set the width and height of an element using the theme spacing scale.
 */
const SIZE: ThemeOptions["unstable_sxConfig"] = {
  size: {
    style(props) {
      const { size, theme } = props;
      const styleFromPropValue = (propValueFinal: number) => {
        const value = theme.spacing(propValueFinal);

        return {
          width: value,
          height: value,
        };
      };

      // Adding support for the breakpoints syntax
      return handleBreakpoints(props, size, styleFromPropValue);
    },
  },
};

/**
 * @description - This is a custom sx prop that allows you to set the width of an element using the theme spacing scale.
 */
const W: ThemeOptions["unstable_sxConfig"] = {
  w: {
    style(props) {
      const { w, theme } = props;
      const styleFromPropValue = (propValueFinal: number) => {
        const value = theme.spacing(propValueFinal);

        return {
          width: value,
        };
      };

      // Adding support for the breakpoints syntax
      return handleBreakpoints(props, w, styleFromPropValue);
    },
  },
};

/**
 * @description - This is a custom sx prop that allows you to set the height of an element using the theme spacing scale.
 */
const H: ThemeOptions["unstable_sxConfig"] = {
  h: {
    style(props) {
      const { h, theme } = props;
      const styleFromPropValue = (propValueFinal: number) => {
        const value = theme.spacing(propValueFinal);

        return {
          height: value,
        };
      };

      // Adding support for the breakpoints syntax
      return handleBreakpoints(props, h, styleFromPropValue);
    },
  },
};

const ROUNDED: ThemeOptions["unstable_sxConfig"] = {
  rounded: {
    style(props) {
      const { rounded, theme } = props;
      const styleFromPropValue = (propValueFinal: number) => {
        const value = theme.spacing(propValueFinal);

        return {
          borderRadius: value,
        };
      };

      // Adding support for the breakpoints syntax
      return handleBreakpoints(props, rounded, styleFromPropValue);
    },
  },
};

export const GRADIENT: ThemeOptions["unstable_sxConfig"] = {
  gradient: {
    style(props) {
      const { gradient: speed = 10 } = props;

      const styleFromPropValue = (propValueFinal: number) => {
        return {
          "@keyframes rotate-gradient": {
            "0%": {
              backgroundPosition: "0% 50%",
            },
            "50%": {
              backgroundPosition: "100% 50%",
            },
            "100%": {
              backgroundPosition: "0% 50%",
            },
          },
          background:
            "linear-gradient(135deg, #BDB7E8 1.16%, #91ADB9 25.18%, #FAA998 39.75%, #FFB784 58.32%, #EAABCD 76.47%, #D3A176 93.5%)",
          backgroundSize: "200% 200%",
          animation: `rotate-gradient ${propValueFinal}s ease infinite`,
        };
      };
      return handleBreakpoints(props, speed, styleFromPropValue);
    },
  },
};

// #endregion

export const theme = createTheme({
  palette: PALETTE,
  typography: TYPOGRAPHY,
  shadows: SHADOWS,
  shape: {
    borderRadius: 6,
  },
  components: {
    ...COMPONENTS,
  },
  unstable_sxConfig: { ...SIZE, ...W, ...H, ...ROUNDED, ...GRADIENT },
});

export type TherifyDesignSystem = typeof theme;
export const styled = createStyled<TherifyDesignSystem>({
  defaultTheme: theme,
});
applyTypography(theme);
