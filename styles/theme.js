
import { PixelRatio } from "react-native";

const fontSCale=PixelRatio.getFontScale();

export const SIZES={
  tiny:3 * fontSCale,
  small:9 * fontSCale,
  normal:12 * fontSCale,
  medium:14 * fontSCale,
  large:18 * fontSCale,
  xlarge:32 * fontSCale
}

export const colorApp={
    bg: "#111827",
    cardBg: "#1F2937",
    second: "#4F46E5",
    white: "#FFF",
    black: "#000",
    gray: "#ddd",
  };

  export const FONTS = {
    bold: "InterBold",
    semiBold: "InterSemiBold",
    medium: "InterMedium",
    regular: "InterRegular",
    light: "InterLight",
  };
  