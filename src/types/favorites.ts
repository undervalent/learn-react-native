import { RestaurantInt } from "./restaurant";
export interface FavoritesInt {
  favorites: RestaurantInt[] | [];
  addFavorites(restaurant: RestaurantInt): void;
  removeFavorites(restaurant: RestaurantInt): void;
}
