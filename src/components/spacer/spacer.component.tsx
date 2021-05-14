import React from "react";
import styled, { useTheme } from "styled-components/native";
import { ViewProps } from "react-native";

import { MainTheme } from "../../types";

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
  xl: 4,
  xxl: 5,
};

type PropertyType = "marginTop" | "marginLeft" | "marginRight" | "marginBottom";
type ValueType = "8px" | "16px" | "32px" | "64px" | "128px";
type VariantType = `${PropertyType}:${ValueType}`;

const getVariant = (
  position: keyof typeof positionVariant,
  size: keyof typeof sizeVariant,
  theme: MainTheme
): VariantType | string => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

interface SpacerViewProps extends ViewProps {
  variant: VariantType;
}

const SpacerView = styled.View<SpacerViewProps>`
  ${({ variant }) => variant};
`;

interface SpacerProps {
  position?: keyof typeof positionVariant;
  size?: keyof typeof sizeVariant;
}
export const Spacer: React.FC<SpacerProps> = ({ position, size, children }) => {
  const theme = useTheme();
  const newPos = position ? position : "top";
  const newSize = size ? size : "small";

  const variant = getVariant(newPos, newSize, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
