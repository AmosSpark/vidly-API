const express = require("express"),
  router = express.Router();
const moviesController = require("../../src/controllers/movies/movies_control"); // IMPORT movies genre controller

// GET ALL GENRE

router.get("/", moviesController.control_Get_All);

// GET A GENRE

router.get("/:id", moviesController.control_Get_A_Genre);

// GET FIRST N GENRES

router.get("/first/:n", moviesController.control_Get_First_N_Amount_Of_Genre);

// GET N AMOUNT OF GENRES

router.get("/random/:n", moviesController.control_Get_Random_Genre);

// CREATE A GENRE

router.post("/", moviesController.control_Post_A_Genre);

// UPDATE A GENRE

router.put("/:id", moviesController.control_Update_A_genre);

// DELETE A GENRE

router.delete("/:id", moviesController.control_Delete_A_genre);

module.exports = router; // TO views/movies/movies_view.js
