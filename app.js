// Create a new express server
const express = require("express");
const app = express();
// Define port that app runs on, process.env.PORT is for heroku
const port = process.env.PORT || 5000;
// Import Mongoose
const mongoose = require('mongoose');
// Import Mongoose key
const db = require('./config/keys').mongoURI;

// Connect to MongoDB using Mongoose
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello Was"));

app.listen(port, () => console.log(`Server is running on port ${port}`));