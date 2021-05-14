import * as React from "react";

import {
  restaurantRequest,
  transformRestaurantResponse,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";
import { RestaurantInt, RestaurantContextType } from "../../types";
import { mocks } from "../retaurants/mock/data";
export const RestaurantsContext = React.createContext<RestaurantContextType>({
  restaurants: [],
  isLoading: false,
  error: "",
});

export const RestaurantsContextProvider: React.FC = ({ children }) => {
  const [restaurants, setRestaurants] = React.useState<RestaurantInt[] | []>(
    []
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const { location } = React.useContext(LocationContext);
  const retrieveRestaurants = (loc: keyof typeof mocks) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantRequest(loc)
        .then(transformRestaurantResponse)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((e) => {
          setIsLoading(false);
          setError(e);
        });
    }, 2000);
  };

  React.useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
