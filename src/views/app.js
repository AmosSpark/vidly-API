const express = require("express"),
  app = express();

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/movies_genres", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(
      `Status: ${mongoose.connection.readyState} [Connected to mongoDB...]`
    )
  )
  .catch((error) =>
    console.error(
      `Status: ${mongoose.connection.readyState} [Couldn't connect to mongoDB...],`
    )
  );

// VIEWS
const moviesView = require("./movies_router");
const musicView = require("./music_router");

// REQUEST CONTROLLERS
const RequestController = require("../controllers/404_control");

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
