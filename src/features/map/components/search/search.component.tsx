import * as React from "react";
import { Searchbar } from "react-native-paper";
import { SearchContainer } from "./search.styles";
import { LocationContext } from "../../../../services/location/location.context";
export const Search = () => {
  const { keyword, search } = React.useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = React.useState(keyword);

  React.useEffect(() => {
    setSearchKeyword(keyword);
    return () => {};
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  );
};
