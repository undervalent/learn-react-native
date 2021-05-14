import { DefaultTheme } from "styled-components";

export interface MainTheme extends DefaultTheme {
  space: string[];
  colors: {
    [key: string]: {
      [key: string]: string;
    };
  };
  lineHeights: { [key: string]: string };
  sizes: string[];
  fonts: { [key: string]: string };
  fontWeights: { [key: string]: number };
  fontSizes: { [key: string]: string };
}
