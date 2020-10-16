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
    const card = await Tour.findById(req.params.id);
  } catch (err) {
    // if (!card) {
    //   return res.status(404).json({
    //     status: "fail",
    //     message: "Invalid ID",
    //   });
    // }

    // res.status(200).json({
    //   status: "success",
    //   data: {
    //     card,
    //   },
    // });
    console.log(err);
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

const updateCard = (req, res) => {
  // if (req.params.id * 1 > cards.length)
  res.status(200).json({
    status: "fail",
    message: "Invalid Id",
  });
};

const deleteCard = (req, res) => {
  const id = req.params.id * 1;
  // const card = cards.find((x) => x.id === id);

  // if (!card) {
  //   return res.status(404).json({
  //     status: "fail",
  //     message: "Invalid ID",
  //   });
  // }

  res.status(200).json({
    status: "success",
    data: {
      card,
    },
  });
};

module.exports = { getAllCards, getCard, createCard, updateCard, deleteCard };
