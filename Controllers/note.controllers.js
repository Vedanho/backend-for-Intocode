const Note = require("../Models/Note.model");

module.exports.noteControllers = {
  createNote: async (req, res) => {
    const newNote = await Note.create({
      text: req.body.text,
      student: req.body.student,
    });
    res.json(newNote);
  },
  deleteNote: async (req, res) => {
    const delNote = await Note.findByIdAndRemove(req.params.id);
    res.json("Заметка удалена");
  },
  getNote: async (req, res) => {
    const getNote = await Note.find();
    res.json(getNote);
  },
  updateNote: async (req, res) => {
    const upNote = await Note.findByIdAndUpdate(req.params.id, {
      text: req.body.name,
    });
    res.json("Изменено");
  },
  getNoteByStudent: async (req, res) => {
    const note = await Note.find({ student: req.params.id }).populate('student');
    res.json(note)
  },
};
