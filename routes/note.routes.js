const { Router } = require("express");

const { noteControllers } = require("../Controllers/note.controllers");

const router = Router();

router.post("/note", noteControllers.createNote);
router.delete("/note", noteControllers.deleteNote);
router.get("/note", noteControllers.getNote);
router.patch('/note', noteControllers.updateNote)
router.get('/note/student/:id', noteControllers.getNoteByStudent)

module.exports = router