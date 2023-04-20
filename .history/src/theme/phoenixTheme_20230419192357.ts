import { ThemeOptions } from "@mui/material";

const primaryColor = '#3700B3';
const secondaryColor = '#03DAC6';
const disabledColor = "#ccc";
const primaryColorShade = "#10293d";

const primaryFontFamily = 'Bad Script';
const secondaryFontFamily = "Roboto";

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

export const PhoenixTheme: ThemeOptions = {
  palette: {
    primary: {
      main: primaryColor,
      dark: primaryColorShade,
      light: "#fff",
    },
    secondary: { main: secondaryColor, light: "#fff" },
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
      color: primaryColor,
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
          borderColor: primaryColor,
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
