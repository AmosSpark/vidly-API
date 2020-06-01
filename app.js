const express = require("express"),
  app = express();
const genres = require("./genres");

// BODY-PARSER MW
app.use(express.json()); // handle raw json
app.use(express.urlencoded({ extended: false })); // handle form data

// VARIABLES
const vidlyBaseRoute = "/vidly.com/api/genres";

// GET ALL GENRE

app.get(vidlyBaseRoute, (req, res) => {
  res.json(genres);
});

// GET A GENRE

app.get(`${vidlyBaseRoute}/:id`, (req, res) => {
  const idFound = genres.find((genre) => genre.id === parseInt(req.params.id));
  const filter = genres.filter((genre) => genre.id === parseInt(req.params.id));
  // validate
  if (idFound) {
    res.json({ get: true, filter });
  } else {
    res
      .status(400)
      .json({ get: `error, genre id: ${req.params.id} not available` });
  }
});

// CREATE A GENRE

app.post(vidlyBaseRoute, (req, res) => {
  const newGenre = {
    id: genres.length + 1,
    genre: req.body.genre,
    star: req.body.star,
  };
  const genre = newGenre;
  // validate
  if (!newGenre.genre || !newGenre.star) {
    res.status(400).json({ post: "error, genre and star input required" });
  } else {
    genres.push(newGenre);
    res.json({ post: "true", genre });
  }
});

// UPDATE A GENRE

app.put(`${vidlyBaseRoute}/:id`, (req, res) => {
  const idFound = genres.find((genre) => genre.id === parseInt(req.params.id));
  if (idFound) {
    const updatedGenre = req.body;
    // validate
    genres.forEach((genre) => {
      if (genre.id === parseInt(req.params.id)) {
        genre.genre = updatedGenre.name ? updatedGenre.genre : genre.genre;
        genre.star = updatedGenre.star ? updatedGenre.star : genre.star;
        res.json({ upate: "true", genre });
      }
    });
  } else {
    res
      .status(400)
      .json({ put: ` error, genre id: ${req.params.id} not available` });
  }
});

// DELETE A GENRE

app.delete("/vidly.com/api/genres/:id", (req, res) => {
  const idFound = genres.find((genre) => genre.id === parseInt(req.params.id));
  // validate
  if (idFound) {
    const index = genres.indexOf(idFound); // get index of found genre
    genres.splice(index, 1); // remove genre from array of genres
    res.json({ delete: "true", idFound });
  } else {
    res
      .status(400)
      .json({ delete: `error, genre id: ${req.params.id} not available` });
  }
});

// HANDLE WRONG REQUEST

app.use((req, res, use) => {
  res.status(404).json({ error: `API not found` });
});

module.exports = app; // EXPORT app TO server.js
