const express = require("express"),
  moviesRouter = express.Router();
const moviesController = require("../controllers/movies_control"); // IMPORT movies genre controller

// GET ALL GENRE

moviesRouter.get("/", moviesController.control_Get_All);

// GET A GENRE

moviesRouter.get("/:id", moviesController.control_Get_A_Genre);

// GET FIRST N GENRES

moviesRouter.get(
  "/first/:n",
  moviesController.control_Get_First_N_Amount_Of_Genre
);

// GET N AMOUNT OF GENRES

moviesRouter.get("/random/:n", moviesController.control_Get_Random_Genre);

// CREATE A GENRE

moviesRouter.post("/", moviesController.control_Post_A_Genre);

// UPDATE A GENRE

moviesRouter.put("/:id", moviesController.control_Update_A_genre);

// DELETE A GENRE

moviesRouter.delete("/:id", moviesController.control_Delete_A_genre);

module.exports = moviesRouter; // TO views/movies/movies_view.js
