import * as React from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { SafeAreaWrapper } from "../../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../../components/restraunt-info/restaurant-info.component";

export const RestaurantDetailScreen: React.FC = ({ route }) => {
  const [showBreakfast, setShowBreakfast] = React.useState(false);
  const [showLunch, setShowLunch] = React.useState(false);
  const [showDinner, setShowDinner] = React.useState(false);
  const [showDrinks, setShowDrinks] = React.useState(false);
  const { restaurant } = route.params;

  return (
    <SafeAreaWrapper>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={showBreakfast}
          onPress={() => setShowBreakfast(!showBreakfast)}
        >
          <List.Item title="Pancakes" />
          <List.Item title="Waffles" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={showLunch}
          onPress={() => setShowLunch(!showLunch)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={showDinner}
          onPress={() => setShowDinner(!showDinner)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={showDrinks}
          onPress={() => setShowDrinks(!showDrinks)}
        >
          <List.Item title="Booz" />
        </List.Accordion>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default RestaurantDetailScreen;
