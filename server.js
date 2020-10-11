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
    default: "Anonymous",
  },
  created_at: { type: Date, default: Date.now },
  tags: {
    type: [String],
    default: ["racism"],
    required: false,
  },
  // tags: [
  //   {
  //     gender: {
  //       isTagged: Boolean,
  //       default: false,
  //       required: false,
  //     },
  //     race: {
  //       isTagged: Boolean,
  //       default: false,
  //       required: false,
  //     },
  //     sexualOrientation: {
  //       isTagged: Boolean,
  //       default: false,
  //       required: false,
  //     },
  //   },
  // ],
  story: {
    type: String,
    required: [true, "Card must have a story"],
  },
});

const Card = mongoose.model("Card", cardSchema);

const testCard = new Card({
  name: "Pauliina",
  tags: ["sexism"],
  story:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
});

testCard
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => console.log("ERROR", err));

const app = require("./app");

const port = process.env.PORT || 3001;

console.log(process.env);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
