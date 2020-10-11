const mongoose = require("mongoose");
const env = require("dotenv");

env.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"));

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tags: Array,
  story: String,
});

const app = require("./app");

const port = process.env.PORT || 3001;

console.log(process.env);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
