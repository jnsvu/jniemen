import { Color } from "@material-ui/core"

type ColorPartial = Partial<Color>

declare module "@material-ui/core/styles/createPalette" {
  interface PaletteColor extends ColorPartial {}
}
