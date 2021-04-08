const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
const url = "https://geo.ipify.org/api/v1";
const apiKey = process.env.GEOLOCATION_APIKEY;
router.get("/geolocation/current", (req, res) => {
  console.log(`${url}?apiKey=${apiKey}`);
  axios
    .get(`${url}?apiKey=${apiKey}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => console.log(error));
});

router.post("/geolocation/search", (req, res) => {
  const ip = req.body.ip;
  axios
    .get(`${url}?apikey=${apiKey}&ipAddress=${ip}`)
    .then((response) => {
      const { data } = response;
      res.json(data);
    })
    .catch(res.status(404).json({ message: "Invalid ip address" }));
});

module.exports = router;
