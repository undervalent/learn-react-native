import styled from "styled-components/native";
import { View, FlatList } from "react-native";

export const SearchContainer = styled(View)`
  padding: ${({ theme }) => theme.space[3]};
`;

export const RestaurantListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
