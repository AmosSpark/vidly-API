const express = require("express"),
  app = express();
const router = require("./routes/api/genres"); // IMPORT genres router
const Requestcontroller = require("./controllers/404_control");

// BODY-PARSER MW
app.use(express.json()); // handle raw json
app.use(express.urlencoded({ extended: false })); // handle form data

// HANDLE CORS
res.use((req, res, next) => {
  res.setHeader("Allow-Control-Acess-Origin", "*");
  res.setHeader("Allow-Control-Acess-Methods", "GET, POST, PUT, PATC, DELETE");
  res.setHeader("Allow-Control-Acess-Headers", "Content-Type, Authorization");
  next();
});

// INIT GENRE ROUTER
const vidlyBaseRoute = "/vidly.com/api/genres"; // home/base
app.use(vidlyBaseRoute, router);

// HANDLE WRONG REQUEST
app.use(Requestcontroller.controlRequestNotFound);

module.exports = app; // EXPORT app TO server.js
