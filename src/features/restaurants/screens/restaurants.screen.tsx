import * as React from "react";

import { FlatList, TouchableOpacity } from "react-native";

import { RestaurantInfoCard, Search } from "../components";
import { RestaurantInt } from "../../../types";
import { RestaurantsContext } from "../../../services";
import {
  SafeAreaWrapper,
  FavoritesBar,
  Loader,
  Spacer,
  FadeInView,
} from "../../../components";

import { NavigationProps } from "../../../types";

export const RestaurantsScreen: React.FC<NavigationProps> = ({
  navigation,
}) => {
  const { restaurants, isLoading } = React.useContext(RestaurantsContext);
  const [isFavoritesToggled, setIsFavoritesToggled] = React.useState(false);

  return (
    <SafeAreaWrapper>
      {isLoading && <Loader />}
      <Search
        isFavoritesToggled={isFavoritesToggled}
        onFavoritesToggle={() => setIsFavoritesToggled(!isFavoritesToggled)}
      />
      {isFavoritesToggled && <FavoritesBar />}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item: RestaurantInt) => item.name}
        contentContainerStyle={{
          padding: 16,
        }}
      />
    </SafeAreaWrapper>
  );
};

export default RestaurantsScreen;
