import * as React from "react";
import { List, Avatar } from "react-native-paper";

import { AuthenticationContext } from "../../../../services";
import { SafeAreaWrapper, Spacer, Text } from "../../../../components";
import { SettingsItem, AvatarContainer } from "./settings.style";
import { NavigationProps } from "../../../../types";

export const SettingsScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const { onLogout, user } = React.useContext(AuthenticationContext);

  return (
    <SafeAreaWrapper>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large" />
        {user && <Text variant="label">{user.email}</Text>}
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          title="Logout"
          description="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeAreaWrapper>
  );
};
