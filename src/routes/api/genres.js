const express = require("express"),
  router = express.Router();
const genreController = require("../../controllers/genres_control"); // FROM genres_conrol.js

// GET ALL GENRE

router.get("/", genreController.control_Get_All);

// GET A GENRE

router.get("/:id", genreController.control_Get_A_Genre);

// GET FIRST N GENRES

router.get("/first/:n", genreController.control_Get_First_N_Amount_Of_Genre);

// GET N AMOUNT OF GENRES

router.get("/random/:n", genreController.control_Get_Random_Genre);

// CREATE A GENRE

router.post("/", genreController.control_Post_A_Genre);

// UPDATE A GENRE

router.put("/:id", genreController.control_Update_A_genre);

// DELETE A GENRE

router.delete("/:id", genreController.control_Delete_A_genre);

module.exports = router; // TO app.js
