import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { RestaurantInt, FavoritesInt } from "../../types";
import { AuthenticationContext } from "../../services";

export const FavoritesContext = React.createContext<FavoritesInt>({
  favorites: [],
  addFavorites: () => {},
  removeFavorites: () => {},
});

export const FavoritesContextProvider: React.FC = ({ children }) => {
  const { user } = React.useContext(AuthenticationContext);
  const [favorites, setFavorites] = React.useState<RestaurantInt[] | []>([]);
  console.log("USER -->", { user });

  const add = (restaurant: RestaurantInt) =>
    setFavorites([...favorites, restaurant]);
  const remove = (restaurant: RestaurantInt) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };

  const saveFavorites = async (value: RestaurantInt[], uid: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFavorites = async (uid: string) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };
  React.useEffect(() => {
    if (user) {
      loadFavorites(user.uid);
    }
    return () => {};
  }, [user]);
  React.useEffect(() => {
    if (user) {
      saveFavorites(favorites, user.uid);
    }
    return () => {};
  }, [favorites, user]);

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
