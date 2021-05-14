import * as React from "react";
import { MapWrapper } from "./map.screen.styles";
import { Search } from "../components/search/search.component";
import { LocationContext, RestaurantsContext } from "../../../services";
import { RestaurantInt } from "../../../types";
import { MapCallout } from "../components/map-callout/map-callout.component";
export const MapScreen = ({ navigation }) => {
  const { location } = React.useContext(LocationContext);
  const { restaurants } = React.useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = React.useState(0);

  const { lat, lng, viewport } = location;

  React.useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
    return () => {};
  }, [location, viewport]);

  return (
    <>
      <Search />
      <MapWrapper
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant: RestaurantInt) => {
          return (
            <MapWrapper.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapWrapper.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapWrapper.Callout>
            </MapWrapper.Marker>
          );
        })}
      </MapWrapper>
    </>
  );
};
