import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "../../components/typography";
import { generateIconForRoute } from "./utils";
import { SafeAreaWrapper } from "../../components/utility/safe-area.component";
const Tab = createBottomTabNavigator();
import { RestaurantNavigation } from "./restaurant.navigatior";
import { MapScreen } from "../../features/map";

const Settings = () => (
  <SafeAreaWrapper>
    <Text>SETTINGS</Text>
  </SafeAreaWrapper>
);

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          // You can return any component that you like here!
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
  );
};

export default AppNavigator;
