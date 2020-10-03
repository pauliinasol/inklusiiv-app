const express = require("express");
const app = express();
const port = 3000;

const cardRouter = require("./routes/cardRoutes");

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

// app.get("/api/cards", getAllCards);

// app.post("/api/cards", createCard);

// app.get("/api/cards/:id", getCard);

// app.patch("/api/cards/:id", updateCard);

// app.delete("/api/cards/:id", deleteCard);

app.use("/api/cards", cardRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
