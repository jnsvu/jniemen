import { createMuiTheme, PaletteColorOptions } from "@material-ui/core/styles"

const darkPrimary: PaletteColorOptions = {
  50: "#0057a8",
  100: "#004e97",
  200: "#004686",
  300: "#003d76",
  400: "#003465",
  500: "#002c54",
  600: "#002343",
  700: "#001a32",
  800: "#001122",
  900: "#000911",
}

const lightPrimary = {
  50: "#22303c",
  100: "#384550",
  200: "#4e5963",
  300: "#646e77",
  400: "#7a838a",
  500: "#91989e",
  600: "#a7acb1",
  700: "#bdc1c5",
  800: "#d3d6d8",
  900: "#e9eaec",
}

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: darkPrimary,
    secondary: {
      main: "#242c37",
    },
    background: {
      default: darkPrimary[900],
      paper: darkPrimary[700],
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  overrides: {
    MuiButton: {
      text: {
        color: "#fff",
      },
    },
  },
})

/*
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
  error?: PaletteColorOptions;
  warning?: PaletteColorOptions;
  info?: PaletteColorOptions;
  success?: PaletteColorOptions;
  type?: PaletteType;
  tonalOffset?: PaletteTonalOffset;
  contrastThreshold?: number;
  common?: Partial<CommonColors>;
  grey?: ColorPartial;
  text?: Partial<TypeText>;
  divider?: string;
  action?: Partial<TypeAction>;
  background?: Partial<TypeBackground>;
  getContrastText?: (background: string) => string;

  */

/*
    50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
  */
