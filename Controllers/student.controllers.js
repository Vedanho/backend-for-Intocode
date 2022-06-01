const Student = require("../Models/Student.model");

module.exports.studentControllers = {
  createUser: async (req, res) => {
    const newStudent = await Student.create({
      name: req.body.name,
      group: req.body.group,
      payment: req.body.payment,
      status: req.body.status,
    });
    res.json(newStudent);
  },
  deleteStudent: async (req, res) => {
    const delStudent = await Student.findByIdAndRemove(req.params.id);
    res.json("Студент удалён");
  },
  getStudent: async (req, res) => {
    const getStudent = await Student.find()
      .populate("group", "name")
      .populate("status", "text")
      .populate("payment", "text");
    res.json(getStudent);
  },
  updateUser: async (req, res) => {
    const upStudent = await Student.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      group: req.body.group,
      payment: req.body.payment,
      status: req.body.status,
    });
    res.json("Изменено");
  },
  getStudentByGroup: async (req, res) => {
    const students = await Student.find({ group: req.params.id })
      .populate("group", "name")
      .populate("status", "text")
      .populate("payment", "text");
    res.json(students);
  },
  getStudentByStatus: async (req, res) => {
    const student = await Student.find({ status: req.params.id })
      .populate("group", "name")
      .populate("status", "text")
      .populate("payment", "text");
    res.json(student);
  },
  getStudentByPayment: async (req, res) => {
    const student = await Student.find({ payment: req.params.id })
      .populate("group", "name")
      .populate("status", "text")
      .populate("payment", "text");
    res.json(student);
  },
  getStudentOffer: async (req, res) => {
    const offer = await Student.find({ group: req.params.id }).find({ status: "62978754062af0d588bbb618" });
    const group =  await Student.find({ group: req.params.id })
    const result = (offer.length/group.length) * 100


    res.json(`${result}%`)
  },
};
