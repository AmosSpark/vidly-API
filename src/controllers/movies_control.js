const Movie = require("../models/db_models/movies_model");

// CONTROL - GET ALL GENRES

exports.control_Get_All = async (req, res) => {
  const findMovies = await Movie.find(), // get all
    movies = findMovies;
  res.json(movies);
};

// CONTROL - GET A GENRE

exports.control_Get_A_Genre = async (req, res) => {
  const id = req.params.id;
  const findMovie = await Movie.findById(id); // get by id
  // validate
  if (findMovie) {
    const movie = findMovie;
    res.json({ get: true, movie });
  } else {
    res.status(400).json({ get: `error, genre id: ${id} not available` });
  }
};

// CONTROL - GET FIRST N AMOUNT OF GENRES

exports.control_Get_First_N_Amount_Of_Genre = async (req, res) => {
  const n = parseInt(req.params.n);
  const findMovies = await Movie.find().limit(n); // get all and limit to n
  const firstNamount = findMovies;
  // validate
  if (n > Movie.length + 1) {
    res.status(400).json({
      get: `error, requested number of genre should not be more than ${
        Movie.length + 1
      }`,
    });
  } else {
    res.json({ get: true, firstNamount });
  }
};

// CONTROL - GET N AMOUNT OF RANDOM GENRES

exports.control_Get_Random_Genre = async (req, res) => {
  const n = parseInt(req.params.n); // N amount
  const findMovies = await Movie.find(); // Get all movies
  const shuffle = findMovies.sort(() => 0.5 - Math.random()); // Shuffle
  let select = shuffle.slice(0, n); // Select N amount
  // validate
  if (n > findMovies.length) {
    res.status(400).json({
      random: `error, requested number of genre should not be more than ${genres.length}`,
    });
  } else {
    res.json({ get: true, select });
  }
};

// CONTROL - POST A GENRE

exports.control_Post_A_Genre = async (req, res) => {
  // create a new movie
  const newMovie = new Movie({
    genre: req.body.genre,
    star: req.body.star,
  });
  // validate
  if (!newMovie.genre || !newMovie.star) {
    res.status(400).json({
      post:
        "error, genre: alphanumeric and star: number characters are required",
    });
  } else if (newMovie.genre.length < 3 || newMovie.star > 5) {
    res.status(400).json({
      post:
        "error, genre: should be more than 2 alphanumeric characters and star: should be a number between 1 - 5",
    });
  } else {
    const movie = await newMovie.save();
    res.json({ post: "true", movie });
  }
};

// CONTROL - UPDATE A GENRE

exports.control_Update_A_genre = async (req, res) => {
  const id = req.params.id;
  const findMovie = await Movie.findById(id); // get by id
  // validate
  if (findMovie) {
    const updatedGenre = req.body;
    // update
    findMovie.set({
      genre: updatedGenre.genre ? updatedGenre.genre : findMovie.genre,
      star: updatedGenre.star ? updatedGenre.star : findMovie.star,
    });
    const movie = await findMovie.save();
    res.json({ upate: "true", movie });
  } else {
    res.status(400).json({ update: `error, genre id: ${id} not available` });
  }
};

// CONTROL - DELETE A GENRE

exports.control_Delete_A_genre = async (req, res) => {
  const id = req.params.id;
  const findMovie = await Movie.findByIdAndRemove(id);
  // validate
  if (findMovie) {
    const movie = findMovie;
    res.json({ delete: "true", movie });
  } else {
    res.status(400).json({ delete: `error, genre id: ${id} not available` });
  }
};
