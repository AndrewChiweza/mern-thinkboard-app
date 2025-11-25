const express = require("express");
const router = express.Router();
const {
  getAllNotes,
  getANote,
  createANote,
  updateANote,
  deleteANote,
} = require("../controllers/notes.controller.js");

router.get("/", getAllNotes);

router.get("/:id", getANote);

router.post("/", createANote);

router.put("/:id", updateANote);

router.delete("/:id", deleteANote);

module.exports = router;
