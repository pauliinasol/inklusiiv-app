const Card = require("./../models/cardModel");

const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();

    res.status(200).json({
      status: "success",
      results: cards.length,
      data: {
        cards,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Error",
    });
  }
};

const getCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    // Card.findOne({ _id: req.params.id })

    res.status(200).json({
      status: "success",
      data: {
        card,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const createCard = async (req, res) => {
  console.log(req.body);
  try {
    const newCard = await Card.create(req.body);
    // const newCard = new Card(req.body);
    // newCard.save();

    res.status(201).json({
      status: "success",
      data: {
        card: newCard,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Hello world",
    });
  }
};

const updateCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        card,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const deleteCard = async (req, res) => {
  await Card.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      return res.status(400).json({
        status: "fail",
        message: err,
      });
    } else {
      return res.status(200).json({
        status: "success",
        data: {
          card: data,
        },
      });
    }
  });
};

module.exports = { getAllCards, getCard, createCard, updateCard, deleteCard };
