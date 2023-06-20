const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
    cardType: {
      type: String,
      enum: ["stack", "project", "testimonial", "others"],
      default: "others",
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Cards = mongoose.model("Cards", cardSchema);
module.exports = Cards;
