const mongoose = require("mongoose");
const User = require("./User");

const JobSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide Company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide Position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["pending", "declined", "interview"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide User"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
