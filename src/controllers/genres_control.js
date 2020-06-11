const genres = require("../models/_genres.json"); // IMPORT genres.json

// CONTROL - GET ALL GENRES

exports.control_Get_All = (req, res) => {
  res.json(genres);
};

// CONTROL - GET A GENRE

exports.control_Get_A_Genre = (req, res) => {
  const idFound = genres.find((genre) => genre.id === parseInt(req.params.id));
  const genre = genres.filter((genre) => genre.id === parseInt(req.params.id));
  // validate
  if (idFound) {
    res.json({ get: true, genre });
  } else {
    res
      .status(400)
      .json({ get: `error, genre id: ${req.params.id} not available` });
  }
};

// CONTROL - GET FIRST N AMOUNT OF GENRES

exports.control_Get_First_N_Amount_Of_Genre = (req, res) => {
  let n = parseInt(req.params.n);
  const firstNamount = genres.slice(0, n);
  // validate
  if (n > genres.length) {
    res.status(400).json({
      get: `error, requested number of genre should not be more than ${genres.length}`,
    });
  } else {
    res.json({ get: true, firstNamount });
  }
};

// CONTROL - GET N AMOUNT OF RANDOM GENRES

exports.control_Get_Random_Genre = (req, res) => {
  const n = parseInt(req.params.n);
  const newGenres = [...genres];
  const shuffle = newGenres.sort(() => 0.5 - Math.random()); // shuffle genres
  let select = shuffle.slice(0, n); // select desired
  // validate
  if (n > newGenres.length) {
    res.status(400).json({
      random: `error, requested number of genre should not be more than ${genres.length}`,
    });
  } else {
    res.json({ get: true, select });
  }
};

// CONTROL - POST A GENRE

exports.control_Post_A_Genre = (req, res) => {
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
};

// CONTROL - UPDATE A GENRE

exports.control_Update_A_genre = (req, res) => {
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
      .json({ update: ` error, genre id: ${req.params.id} not available` });
  }
};

// CONTROL - DELETE A GENRE

exports.control_Delete_A_genre = (req, res) => {
  const idFound = genres.find((genre) => genre.id === parseInt(req.params.id));
  // validate
  if (idFound) {
    const index = genres.indexOf(idFound); // get index of found genre
    const genre = genres.splice(index, 1); // remove genre from array of genres
    res.json({ delete: "true", genre });
  } else {
    res
      .status(400)
      .json({ delete: `error, genre id: ${req.params.id} not available` });
  }
};
