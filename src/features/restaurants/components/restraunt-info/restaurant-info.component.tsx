import * as React from "react";
import { SvgXml } from "react-native-svg";

import { RestaurantInt } from "../../../../types";
import { star, open } from "../../../../../assets";
import { Text, Spacer, Favorite } from "../../../../components";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Rating,
  Section,
  SectionEnd,
  Icon,
} from "./restaurant-info.styles";

interface RestaurantInfoCardProps {
  restaurant: RestaurantInt;
}

export const RestaurantInfoCard: React.FC<RestaurantInfoCardProps> = ({
  restaurant,
}) => {
  const {
    name,
    icon,
    photos,
    // openingHours,
    rating = 0,
    address,
    isOpenNow,
    isClosedTemporarily,
  } = restaurant;

  const uri =
    photos && photos.length
      ? photos[0]
      : "https://designshack.net/wp-content/uploads/placeholder-image-368x246.png";
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover source={{ uri }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((el, idx) => (
              <SvgXml key={`star-${idx}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
