const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
  name: Number,
  week: Number
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
