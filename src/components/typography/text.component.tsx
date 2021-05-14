import styled from "styled-components/native";
import { TextProps } from "react-native";
import { MainTheme } from "../../types";

const defaultTextStyles = (theme: MainTheme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin: 0;
`;

const body = (theme: MainTheme) => `
  font-size: ${theme.fontSizes.body};
`;
const hint = (theme: MainTheme) => `
  font-size: ${theme.fontSizes.body};
`;
const label = (theme: MainTheme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium}
`;
const caption = (theme: MainTheme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;
const error = (theme: MainTheme) => `
  color: ${theme.colors.text.error};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

interface TextInt extends TextProps {
  theme: MainTheme;
  variant?: keyof typeof variants;
}
export const Text = styled.Text<TextInt>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => {
    const output = variant ? variant : "body";
    return variants[output](theme);
  }}
`;
