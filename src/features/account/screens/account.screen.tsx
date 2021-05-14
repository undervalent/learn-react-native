import * as React from "react";

import { Spacer } from "../../../components";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "../components/account.styles";
import { NavigationProps } from "../../../types";

export const AccountScreen: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>

        <Spacer size="large" />
        <AuthButton
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Registration
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
