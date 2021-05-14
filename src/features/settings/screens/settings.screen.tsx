import * as React from "react";
import { Button } from "react-native";
import { AuthenticationContext } from "../../../services";
import { SafeAreaWrapper, Text } from "../../../components";

export const Settings = () => {
  const { onLogout } = React.useContext(AuthenticationContext);

  return (
    <SafeAreaWrapper>
      <Text>SETTINGS</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeAreaWrapper>
  );
};
