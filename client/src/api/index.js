import axios from "axios";
export const fetchGeolocationCurrent = () =>
  axios.get(`/api/geolocation/current`);
export const fetchGeolocationSearch = (query) =>
  axios.post(`/api/geolocation/search`, { query });
