const api = require("../api");
export const fetchGeolocationCurrent = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGeolocationCurrent();
    dispatch({ type: "GEOLOCATION_CURRENT", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchGeolocationSearch = (query) => async (dispatch) => {
  try {
    const { data } = await api.fetchGeolocationSearch(query);
    dispatch({ type: "GEOLOCATION_SEARCH", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const resetGeolocation = () => async (dispatch) => {
  try {
    dispatch({ type: "RESET_GEOLOCATION" });
  } catch (error) {
    console.log(error);
  }
};
