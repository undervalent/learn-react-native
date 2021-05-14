import * as React from "react";
import { Platform } from "react-native";
import { Text } from "../../typography";
import { RestaurantInt } from "../../../types";

import {
  CompactImage,
  Item,
  CompactWebview,
} from "./compact-restaurant.styles";

interface CompactRestaurantInfoProps {
  restaurant: RestaurantInt;
  isMap?: boolean;
}

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo: React.FC<CompactRestaurantInfoProps> = ({
  restaurant,
  isMap,
}) => {
  console.log("RESTAURANT FAVORITES -->", { restaurant });
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </Item>
  );
};
