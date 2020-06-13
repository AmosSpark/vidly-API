const express = require("express");
const router = express.Router();
const musicController = require("../../src/controllers/music/music_control"); // IMPORT music genre controller

// GET ALL GENRE

router.get("/", musicController.control_Get_All);

// GET A GENRE

router.get("/:id", musicController.control_Get_A_Genre);

// GET FIRST N GENRES

router.get("/first/:n", musicController.control_Get_First_N_Amount_Of_Genre);

// GET N AMOUNT OF GENRES

router.get("/random/:n", musicController.control_Get_Random_Genre);

// CREATE A GENRE

router.post("/", musicController.control_Post_A_Genre);

// UPDATE A GENRE

router.put("/:id", musicController.control_Update_A_genre);

// DELETE A GENRE

router.delete("/:id", musicController.control_Delete_A_genre);

module.exports = router; // TO views/music/music_view.js
