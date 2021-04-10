import axios from "axios";
const url =
  "https://geo.ipify.org/api/v1?apiKey=at_Y4kRFfp3LmowaElGb5AL9oDLFcOMj";
export const fetchGeolocationCurrent = () => axios.get(`${url}`);
export const fetchGeolocationSearch = (query) =>
  axios.get(`${url}&domain=${query}`);
