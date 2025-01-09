const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

const PORT = 8000;

const MongoURI = "mongodb+srv://gitbitdatabase:GitBiting404@gitbit.x9gge.mongodb.net/?retryWrites=true&w=majority&appName=GitBit";

mongoose.connect(MongoURI).then(() => {
  console.log("Connected to MongoDB");
});


app.use(express.json());

// app.get("/", (req, res) => {
//     res.render("home");
//     }
// );

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
