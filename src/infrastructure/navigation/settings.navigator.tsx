import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import {
  SettingsScreen,
  FavoritesScreen,
  CameraScreen,
} from "../../features/settings";

const Stack = createStackNavigator();

export const SettingsNavigator: React.FC = () => (
  <Stack.Navigator
    headerMode="screen"
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Favorites" component={FavoritesScreen} />
    <Stack.Screen name="Camera" component={CameraScreen} />
  </Stack.Navigator>
);
