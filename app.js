// Part #1 Point 1

const express = require("express");
const path = require("path");
const cors = require("cors");

// Part #1 Point 2
// imported module body-parser
const bodyParser = require("body-parser");

// Part #2 Point 6
// Exporting nav links

const loginRouter = require("./src/routes/loginroute");
const signupRouter = require("./src/routes/signuproute");

// Part #1 Point 3
// Renamed file name homerouter.js -> homeroute.js
const homeRouter = require("./src/routes/homeroute");
const booksRouter = require("./src/routes/booksroute");
const authorsRouter = require("./src/routes/authorsroute");

const app = new express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

// Part #2 Point 7
// Using cors
app.use(
  cors({
    origin: "https://127.0.0.1:5000",
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/home", homeRouter);
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);

app.get("/", function (req, res) {
  res.render("index", {});
});

app.listen(5000, () => {
  console.log("Server Ready on 3000");
});
