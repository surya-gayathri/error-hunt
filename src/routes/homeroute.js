// Part 1 Point 3
// Renamed file name homerouter.js -> homeroute.js

const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", function (req, res) {
  res.render("home", {});
});

module.exports = homeRouter;
