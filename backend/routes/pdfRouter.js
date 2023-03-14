const express = require("express");
const route = express.Router();
const sendEmail = require("../controllers/sendEmail");

route.post("/attachment", sendEmail);

module.exports = route;
