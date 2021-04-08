import axios from "axios";
export const fetchGeolocationCurrent = () =>
  axios.get(`/api/geolocation/current`);
export const fetchGeolocationSearch = (ip) =>
  axios.post(`/api/geolocation/search`, { ip });
