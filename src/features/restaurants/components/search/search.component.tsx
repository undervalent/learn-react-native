import * as React from "react";
import { Searchbar } from "react-native-paper";
import { SearchContainer } from "./search.styles";
import { LocationContext } from "../../../../services";

interface SearchProps {
  isFavoritesToggled: boolean;
  onFavoritesToggle(): void;
}

export const Search: React.FC<SearchProps> = ({
  onFavoritesToggle,
  isFavoritesToggled,
}) => {
  const { keyword, search } = React.useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = React.useState(keyword);

  React.useEffect(() => {
    setSearchKeyword(keyword);
    return () => {};
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavoritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavoritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  );
};
