const mongoose = require("mongoose");

// SCHEMA
const moviesGenereSchema = new mongoose.Schema({
  id: { type: Number },
  genre: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  star: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

// MODEL
const Movie = mongoose.model("Movie", moviesGenereSchema);

module.exports = Movie; // To movies_control.js
