import * as React from "react";
import { ScrollView } from "react-native";
import { Wrapper } from "./favorites-bar.styles";
import { FavoritesContext } from "../../../services";
import { CompactRestaurantInfo, Spacer } from "../../../components";
import { RestaurantInt } from "../../../types";

export const FavoritesBar = () => {
  const { favorites } = React.useContext(FavoritesContext);
  if (!favorites.length) {
    return null;
  }
  return (
    <Wrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant: RestaurantInt) => (
          <Spacer position="left" size="medium">
            <CompactRestaurantInfo restaurant={restaurant} />
          </Spacer>
        ))}
      </ScrollView>
    </Wrapper>
  );
};
