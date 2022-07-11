require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  image: String,
  about: String,
});

const bookdata = mongoose.model("bookdata", BookSchema);

module.exports = bookdata;
