import * as React from "react";

import { FlatList, TouchableOpacity } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import { SafeAreaWrapper } from "../../../components/utility/safe-area.component";
import { RestaurantInt } from "../../../types";
import { RestaurantsContext } from "../../../services";
import { FavoritesBar, Loader } from "../../../components";
import { Search } from "../components/search/search.component";

export function RestaurantsScreen({ navigation }) {
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
    </SafeAreaWrapper>
  );
}

export default RestaurantsScreen;
