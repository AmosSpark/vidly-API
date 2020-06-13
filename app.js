const express = require("express"),
  app = express();
// const videosRouter = require("./src/router/movies/movies_router"); // IMPORT movies router
const moviesView = require("./src/views/movies/movies_view"); // IMPORT movies view
const RequestController = require("./src/controllers/404_control"); // IMPORT wrong request controller

// BODY-PARSER MW
app.use(express.json()); // handle raw json
app.use(express.urlencoded({ extended: false })); // handle form data

// INIT GENRE ROUTER
const vidlyBaseRoute = "/vidly.com/api/genres"; // home/base
app.use(vidlyBaseRoute, moviesView.movieRouter);

// HANDLE WRONG REQUEST
app.use(RequestController.controlRequestNotFound);

module.exports = app; // EXPORT app TO server.js
