import * as React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Spacer, Text } from "../../../components";
import { AuthenticationContext } from "../../../services";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/account.styles";

import { NavigationProps } from "../../../types";

export const RegisterScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const { onRegister, isLoading, error } = React.useContext(
    AuthenticationContext
  );

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(val) => setEmail(val)}
        />

        <Spacer size="large" />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(val) => setPassword(val)}
        />
        <Spacer size="large" />
        <AuthInput
          label="Repeat Password"
          value={repeatPassword}
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(val) => setRepeatPassword(val)}
        />
        <ErrorContainer>
          <Text variant="error">{error}</Text>
        </ErrorContainer>
        <Spacer size="large" />
        {isLoading ? (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        ) : (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onRegister(email, password, repeatPassword)}
          >
            Register
          </AuthButton>
        )}
      </AccountContainer>
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
