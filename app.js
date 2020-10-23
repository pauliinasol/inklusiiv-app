const express = require("express");
const app = express();
const cards = require("./data/cards.json");
const cors = require("cors");

const cardRouter = require("./routes/cardRoutes");

app.use(express.json());
app.use(express.static(__dirname + "/public"));

if (process.env.NODE_ENV === "development") {
  app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log(req.requestTime);
    next();
  });
}

app.use("/api/cards", cardRouter);

app.use(cors());

app.get("/", (req, res) => {
  res.send(cards);
});

module.exports = app;
