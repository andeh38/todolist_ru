const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"]
  },
  finishedAt: {
    type: Date,
    required: [true, "Please add a date to finish to"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Todos", TodosSchema);
