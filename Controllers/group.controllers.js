const Group = require("../Models/Group.model");

module.exports.groupControllers = {
  createGroup: async (req, res) => {
    const newGroup = await Group.create({
      name: req.body.name,
      week: req.body.week,
    });
    res.json(newGroup);
  },
  deleteGroup: async (req, res) => {
    const delGroup = await Group.findByIdAndRemove(req.params.id);
    res.json("Группа удалена");
  },
  getGroup: async (req, res) => {
    const getGroup = await Group.find();
    res.json(getGroup);
  },
  updateGroup: async (req, res) => {
    const upGroup = await Group.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      week: req.body.name,
    });
    res.json(upGroup);
  },
  getGroupByWeek: async (req, res) => {
    const group = await Group.find({ week: req.body.week });
    res.json(group);
  },
  getFinishGroup: async (req, res) => {
    const group = await Group.find({ week: { $gt: 16 } });
    res.json(group)
  },
};
