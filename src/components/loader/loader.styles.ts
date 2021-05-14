import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native";

export const Wrapper = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Indicator = styled(ActivityIndicator)`
  margin-left: -25px;
`;
