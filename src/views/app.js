const express = require("express"),
  app = express();
const moviesView = require("./movies_router"); // IMPORT movies view
const musicView = require("./music_router"); // IMPORT music view
const RequestController = require("../controllers/404_control"); // IMPORT wrong request controller

// BODY-PARSER MW
app.use(express.json()); // handle raw json
app.use(express.urlencoded({ extended: false })); // handle form data

// INIT MOVIES GENRE ROUTER
const vidlyMoviesBaseRoute = "/movies/genres"; // home/base
app.use(vidlyMoviesBaseRoute, moviesView);

// INIT MUSIC GENRE ROUTER
const vidlyMusicBaseRoute = "/music/genres"; // home/base
app.use(vidlyMusicBaseRoute, musicView);

// HANDLE WRONG REQUEST
app.use(RequestController.controlRequestNotFound);

module.exports = app; // EXPORT app TO server.js
