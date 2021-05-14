import { mocks, mockImages } from "./mock/data";
import camelize from "camelize";
import _ from "lodash";

export const restaurantRequest = (location: keyof typeof mocks) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const transformRestaurantResponse = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      address: _.get(restaurant, "vicinity", ""),
      isOpenNow: _.get(restaurant, "opening_hours.open_now", false),
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
