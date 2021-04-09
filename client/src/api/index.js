import axios from "axios";
const url = "https://ip-tracker-app.herokuapp.com";
export const fetchGeolocationCurrent = () =>
  axios.get(`${url}/api/geolocation/current`);
export const fetchGeolocationSearch = (query) =>
  axios.post(`${url}/api/geolocation/search`, { query });
