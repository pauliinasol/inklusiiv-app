const express = require("express");
const {
  getAllCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
} = require("../controllers/cardController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  next();
});

router.route("/").get(getAllCards).post(createCard);

router.route("/:id").get(getCard).patch(updateCard).delete(deleteCard);

module.exports = router;
