export const generateIconForRoute = (route: string) => {
  let iconName;

  switch (route) {
    case "Restaurants":
      iconName = "md-restaurant";
      break;
    case "Settings":
      iconName = "md-settings";
      break;
    case "Map":
      iconName = "md-map";
      break;
    default:
      break;
  }

  return iconName;
};
