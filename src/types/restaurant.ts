export interface RestaurantInt {
  name: string;
  icon: string;
  address: string;
  photos: string[];
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
  placeId: string;
}

export interface RestaurantContextType {
  restaurants: RestaurantInt[];
  isLoading: boolean;
  error: string;
}
