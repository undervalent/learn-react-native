import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FavoritesContext } from "../../services";
import { FavoriteButton } from "./favorite.styles";
import { RestaurantInt } from "../../types";

interface FavoriteProps {
  restaurant: RestaurantInt;
}

export const Favorite: React.FC<FavoriteProps> = ({ restaurant }) => {
  const { addFavorites, removeFavorites, favorites } =
    React.useContext(FavoritesContext);

  const isFavorite = favorites.find((el) => el.placeId === restaurant.placeId);

  return (
    <FavoriteButton
      onPress={() =>
        !isFavorite ? addFavorites(restaurant) : removeFavorites(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteButton>
  );
};
