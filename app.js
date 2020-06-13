const express = require("express"),
  app = express();
const moviesView = require("./src/views/movies/movies_view"); // IMPORT movies view
const musicView = require("./src/views/music/music_view"); // IMPORT music view
const RequestController = require("./src/controllers/404_control"); // IMPORT wrong request controller

// BODY-PARSER MW
app.use(express.json()); // handle raw json
app.use(express.urlencoded({ extended: false })); // handle form data

// INIT MOVIES GENRE ROUTER
const vidlyMoviesBaseRoute = "/api.vidly.com/movies/genres"; // home/base
app.use(vidlyMoviesBaseRoute, moviesView.movieRouter);

// INIT MUSIC GENRE ROUTER
const vidlyMusicBaseRoute = "/api.vidly.com/music/genres"; // home/base
app.use(vidlyMusicBaseRoute, musicView.musicRouter);

// HANDLE WRONG REQUEST
app.use(RequestController.controlRequestNotFound);

module.exports = app; // EXPORT app TO server.js
