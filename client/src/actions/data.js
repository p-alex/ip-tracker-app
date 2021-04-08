const api = require("../api");
export const fetchGeolocationCurrent = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGeolocationCurrent();
    dispatch({ type: "GEOLOCATION_CURRENT", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchGeolocationSearch = (ip) => async (dispatch) => {
  try {
    const { data } = await api.fetchGeolocationSearch(ip);
    dispatch({ type: "GEOLOCATION_SEARCH", payload: data });
  } catch (error) {
    console.log(error);
  }
};
