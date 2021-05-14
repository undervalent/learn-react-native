import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  const { user } = React.useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
