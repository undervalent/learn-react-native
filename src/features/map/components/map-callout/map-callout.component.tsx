import * as React from "react";
import { RestaurantInt } from "../../../../types";
import { CompactRestaurantInfo } from "../../../../components/restaurant/compact-restaurant-info/compact-restaurant.component";

interface CalloutProps {
  restaurant: RestaurantInt;
}

export const MapCallout: React.FC<CalloutProps> = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};

export default MapCallout;
