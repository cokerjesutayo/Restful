const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      unique: true,
      trim: true,

    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    projectdone: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      max: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
