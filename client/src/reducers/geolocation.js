export default (geolocation = {}, action) => {
  switch (action.type) {
    case "GEOLOCATION_CURRENT":
      return action.payload;
    case "GEOLOCATION_SEARCH":
      return action.payload;
    case "RESET_GEOLOCATION":
      return {};
    default:
      return geolocation;
  }
};
