import { createMuiTheme, PaletteColorOptions, responsiveFontSizes } from "@material-ui/core/styles"

const darkPrimary: PaletteColorOptions = {
  50: "#3379b9",
  100: "#1a68b1",
  200: "#0057a8",
  300: "#004e97",
  400: "#004686",
  500: "#003d76",
  600: "#003465",
  700: "#002c54",
  800: "#002343",
  900: "#001a32",
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

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: darkPrimary,
    secondary: {
      main: "#242c37",
    },
    background: {
      default: "#000911",
      paper: "#000f1c",
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

const responsiveTheme = responsiveFontSizes(theme)
export { responsiveTheme as theme }

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
