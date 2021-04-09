const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();
const url = "https://geo.ipify.org/api/v1";
const apiKey = process.env.GEOLOCATION_APIKEY;
router.get("/geolocation/current", (req, res) => {
  axios
    .get(`${url}?apiKey=${apiKey}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => console.log(error));
});

router.post("/geolocation/search", (req, res) => {
  const { query } = req.body;
  console.log(query);
  axios
    .get(`${url}?apiKey=${apiKey}&domain=${query}`)
    .then((response) => {
      const { data } = response;
      res.json(data);
    })
    .catch((error) => {
      if (error) {
        res.json({ message: "Doesn't exist." });
      }
    });
});

module.exports = router;
