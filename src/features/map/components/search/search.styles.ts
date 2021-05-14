import styled from "styled-components/native";
import { View } from "react-native";

export const SearchContainer = styled(View)`
  padding: ${({ theme }) => theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;
