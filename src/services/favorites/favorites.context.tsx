import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { RestaurantInt, FavoritesInt } from "../../types";

export const FavoritesContext = React.createContext<FavoritesInt>({
  favorites: [],
  addFavorites: () => {},
  removeFavorites: () => {},
});

export const FavoritesContextProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = React.useState<RestaurantInt[] | []>([]);

  const add = (restaurant: RestaurantInt) =>
    setFavorites([...favorites, restaurant]);
  const remove = (restaurant: RestaurantInt) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };

  const saveFavorites = async (value: RestaurantInt[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };
  React.useEffect(() => {
    loadFavorites();
    return () => {};
  }, []);
  React.useEffect(() => {
    saveFavorites(favorites);
    return () => {};
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorites: add,
        removeFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
