import { createTheme } from "@mui/material";

const primaryColor = '#0072E5';
const secondaryColor = '#EB0014';
const disabledColor = "#ccc";

const fontFamily = 'Bad Script';


export const PhoenixTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      dark: '#003A75',
      light: "#fff",

    },
    secondary: { main: secondaryColor, dark:'#570007',light: "#fff" },
    background: {
      default: "#fff",
    },
  },
  typography: {
    allVariants: {
      fontWeight: 400,
      fontSize: "12px",
      fontFamily: fontFamily,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        size: "medium",
      },
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          paddingRight: 15,
          paddingLeft: 15,
          paddingTop: 5,
          paddingBottom: 5,
          fontFamily: fontFamily,
          fontSize: "12px",
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
            fontFamily: fontFamily,
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
          fontFamily: fontFamily,
        },
      },
    },
  },
});
