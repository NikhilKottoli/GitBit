const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

const PORT = 8000;

mongoose.connect("mongodb://localhost:27017/GitBit").then(() => {
  console.log("Connected to MongoDB");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());

app.get("/", (req, res) => {
    res.render("home");
    }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
