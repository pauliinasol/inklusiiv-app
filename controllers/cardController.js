const fs = require("fs");

const cards = JSON.parse(fs.readFileSync(`${__dirname}/../data/cards.json`));

const getAllCards = (req, res) => {
  res.status(200).json({
    status: "success",
    results: cards.length,
    requestedAt: req.requestTime,
    data: {
      cards,
    },
  });
};

const getCard = (req, res) => {
  const id = req.params.id * 1;
  const card = cards.find((x) => x.id === id);

  if (!card) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      card,
    },
  });
};

const createCard = (req, res) => {
  const newId = cards[cards.length - 1].id + 1;

  const newCard = Object.assign({ id: newId }, req.body);
  cards.push(newCard);

  fs.writeFile(`${__dirname}/data/cards.json`, JSON.stringify(cards), (err) => {
    res.status(201).json({ status: "success", data: { cards: newCard } });
  });
};

const updateCard = (req, res) => {
  if (req.params.id * 1 > cards.length)
    res.status(200).json({
      status: "fail",
      message: "Invalid Id",
    });
};

const deleteCard = (req, res) => {
  const id = req.params.id * 1;
  const card = cards.find((x) => x.id === id);

  if (!card) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      card,
    },
  });
};

module.exports = { getAllCards, getCard, createCard, updateCard, deleteCard };
