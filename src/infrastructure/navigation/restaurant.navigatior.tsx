import * as React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import {
  RestaurantsScreen,
  RestaurantDetailScreen,
} from "../../features/restaurants";
const RestaurantStack = createStackNavigator();

export const RestaurantNavigation = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
