import * as React from "react";

import { locationRequest, locationTransform } from "./location.service";
import { LocationContextInt, LocationInt } from "../../types";

export const LocationContext = React.createContext<LocationContextInt>({
  location: null,
  isLoading: false,
  error: "",
  keyword: "San Francisco",
  search: (searchKeyword) => searchKeyword,
});

export const LocationContextProvider: React.FC = ({ children }) => {
  const [location, setLocation] = React.useState<LocationInt | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [keyword, setKeyword] = React.useState("San Francisco");

  const onSearch = (searchKeyword: string) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };
  React.useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword)
      .then(locationTransform)
      .then((results) => {
        setIsLoading(false);
        setLocation(results);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e);
      });
    return () => {};
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
