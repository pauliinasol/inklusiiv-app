const express = require("express");
const cors = require("cors");
const {
  getAllCards,
  getCard,
  createCard,
  // updateCard,
  // deleteCard,
} = require("../controllers/cardController");

const router = express.Router();

app.use(cors());

router.param("id", (req, res, next, val) => {
  console.log(`Card id is: ${val}`);
  next();
});

router.route("/").get(getAllCards).post(createCard);

// router.route("/:id").get(getCard).patch(updateCard).delete(deleteCard);

router.route("/:id").get(getCard);

module.exports = router;
