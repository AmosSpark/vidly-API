const express = require("express"),
  app = express();
const router = require("./src/routes/api/genres"); // IMPORT genres router
const Requestcontroller = require("./src/controllers/404_control");

// BODY-PARSER MW
app.use(express.json()); // handle raw json
app.use(express.urlencoded({ extended: false })); // handle form data

// INIT GENRE ROUTER
const vidlyBaseRoute = "/vidly.com/api/genres"; // home/base
app.use(vidlyBaseRoute, router);

// HANDLE WRONG REQUEST
app.use(Requestcontroller.controlRequestNotFound);

module.exports = app; // EXPORT app TO server.js
