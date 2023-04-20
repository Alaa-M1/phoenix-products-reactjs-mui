import { ThemeOptions } from "@mui/material";
import { ecoPrimaryColor, ecoSecondaryColor } from "./DefaultTheme";

export const primaryColorShade = "#10293d";
export const whiteColor = "#fff";
export const disabledColor = "#00000042";
export const primaryFontFamily = "Roboto";
export const secondaryFontFamily = "Montserrat";

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    title?: React.CSSProperties;
    header?: React.CSSProperties;
  }

  interface TypographyOptions {
    title?: React.CSSProperties;
    header?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
    header: true;
  }
}

/**
 * Custom Theme to match the styling of desktop view.
 *
 * Usage :
 *
 * - For Button component just use the native mui Button and you can apply any of button variant.
 *
 * eg:
 *
 * ```
 * <Button variant="contained" color="primary">click</Button>
 * ```
 *
 * - For Typography component you can provide one of this variants (title , header) or keep with default one without provide any variant.
 *
 * eg:
 *
 * ```
 * <Typography variant="title" color="primary.main">text</Typography>
 * ```
 *
 * Note :
 *
 * You should apply what exists in theme like the usage of primary color in the typography component above to avoid the upcoming changes
 */
export const PhoenixTheme: ThemeOptions = {
  palette: {
    primary: {
      main: ecoPrimaryColor,
      dark: primaryColorShade,
      light: "#fff",
    },
    secondary: { main: ecoSecondaryColor, light: "#fff" },
    background: {
      default: "#fff",
    },
  },
  typography: {
    allVariants: {
      fontWeight: 400,
      fontSize: "13px",
      fontFamily: primaryFontFamily,
    },
    title: {
      fontFamily: secondaryFontFamily,
      fontSize: "14px",
      fontWeight: 700,
    },
    header: {
      fontFamily: secondaryFontFamily,
      textTransform: "uppercase",
      color: ecoPrimaryColor,
      fontSize: "x-large",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "&": {
          scrollbarWidth: "thin",
          scrollbarColor: "#bfbfbf transparent",
        },
        "&::-webkit-scrollbar": {
          width: "7px",
          height: "7px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
          borderRadius: "20px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#bfbfbf",
          borderRadius: "20px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        size: "small",
      },
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          paddingRight: 21,
          paddingLeft: 21,
          paddingTop: 3,
          paddingBottom: 3,
          fontFamily: primaryFontFamily,
          fontSize: "13px",
          fontWeight: 600,
          alignItems: "center",
        },

        text: ({ ownerState, theme }) => ({
          "& span svg": {
            color: !ownerState.disabled
              ? ownerState.color !== "inherit" && ownerState.color
                ? theme.palette[ownerState.color].main
                : "inherit"
              : disabledColor,
          },
          "&:hover": {
            backgroundColor:
              ownerState.color !== "inherit" && ownerState.color
                ? theme.palette[ownerState.color].main
                : "inherit",
            color: "white",
            "& span svg": {
              color: "#fff",
            },
          },
        }),
        contained: ({ ownerState, theme }) => ({
          borderRadius: "0px",
          "&:hover": {
            backgroundColor:
              ownerState.color !== "inherit" && ownerState.color
                ? theme.palette[ownerState.color].dark
                : "inherit",
          },
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          borderColor: ecoPrimaryColor,
          "& .MuiInputBase-formControl": {
            fontFamily: primaryFontFamily,
            fontSize: "13px",
            fontWeight: 400,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: "15px",
          fontFamily: primaryFontFamily,
        },
      },
    },
  },
};
