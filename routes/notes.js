const express = require("express");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");
const Note = require("../models/Note");
const router = express.Router();

router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const note = await Note.find({ user: req.user.id });
    res.send(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error!!!");
  }
});

router.post(
  "/addnote",
  [body("title").isLength({ min: 3 }), body("description").exists()],
  fetchUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const note = await Note.create({
        user: req.user.id,
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tag,
      });
      res.send(note);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error!!!");
    }
  }
);

router.put("/updatenote/:id", fetchUser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found.");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed.");
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.send(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error!!!");
  }
});

router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found.");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed.");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted.", note: note});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error!!!");
  }
});

module.exports = router;
