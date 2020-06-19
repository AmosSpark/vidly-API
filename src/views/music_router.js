const express = require("express");
const musicRouter = express.Router();
const musicController = require("../controllers/music_control"); // IMPORT music genre controller

// GET ALL GENRE

musicRouter.get("/", musicController.control_Get_All);

// GET A GENRE

musicRouter.get("/:id", musicController.control_Get_A_Genre);

// GET FIRST N GENRES

musicRouter.get(
  "/first/:n",
  musicController.control_Get_First_N_Amount_Of_Genre
);

// GET N AMOUNT OF GENRES

musicRouter.get("/random/:n", musicController.control_Get_Random_Genre);

// CREATE A GENRE

musicRouter.post("/", musicController.control_Post_A_Genre);

// UPDATE A GENRE

musicRouter.put("/:id", musicController.control_Update_A_genre);

// DELETE A GENRE

musicRouter.delete("/:id", musicController.control_Delete_A_genre);

module.exports = musicRouter; // TO views/music/music_view.js
