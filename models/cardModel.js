const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Anonymous",
  },
  created_at: { type: Date, default: Date.now },
  tags: {
    type: [String],
    default: ["racism"],
    required: false,
  },
  story: {
    type: String,
    required: [true, "Card must have a story"],
  },
});

const Card = mongoose.model("Card", cardSchema);

// const newCard = new Card({
//   name: "kfldjgf",
//   tags: ["gdfgfdg"],
//   story: "ldkfgjf",
// });

// newCard.save();

module.exports = Card;
