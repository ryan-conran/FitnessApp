// Copy and paste your work, or start typing.const express = require("express");
const mongoose = require("mongoose");
var express = require('express');

const PORT = process.env.PORT || 3002;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Workout2", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use("/", require("./routes/index.js"));
app.use("/api", require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});