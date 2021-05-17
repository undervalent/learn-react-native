import * as React from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { Spacer, Text } from "../../../../components";
import { FavoritesContext } from "../../../../services";
import { RestaurantInfoCard } from "../../../../features/restaurants";
import { RestaurantInt, NavigationProps } from "../../../../types";
import { Wrapper } from "./favorites.styles";
export const FavoritesScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const { favorites } = React.useContext(FavoritesContext);

  return (
    <Wrapper>
      {favorites.length ? (
        <FlatList
          data={favorites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item: RestaurantInt) => item.name}
          contentContainerStyle={{
            padding: 16,
          }}
        />
      ) : (
        <Text>You don't have any favorites. You should. </Text>
      )}
    </Wrapper>
  );
};
