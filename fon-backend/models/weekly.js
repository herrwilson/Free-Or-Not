const mongoose = require("mongoose");

const WeeklySchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  year: {
    type: Number,
  },
  userGain: {
    type: Number,
  },
  userLost: {
    type: Number,
  },
});

const Weekly = mongoose.model("Weekly", WeeklySchema);
module.exports = Weekly;
