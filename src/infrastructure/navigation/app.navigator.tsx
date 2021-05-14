import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { generateIconForRoute } from "./utils";
import { RestaurantNavigation } from "./restaurant.navigatior";
import { MapScreen } from "../../features/map";
import { Settings } from "../../features/settings";
import {
  LocationContextProvider,
  RestaurantsContextProvider,
  FavoritesContextProvider,
} from "../../services";
const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                return (
                  <Ionicons
                    name={generateIconForRoute(route.name)}
                    size={size}
                    color={color}
                  />
                );
              },
            })}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantNavigation} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};

export default AppNavigator;
