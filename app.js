// Create a new express server
const express = require("express");
const app = express();
// Define port that app runs on, process.env.PORT is for heroku
const port = process.env.PORT || 5000;
// Import Mongoose
const mongoose = require('mongoose');
// Import body parses, to parse JSON
const bodyParser = require('body-parser');
// Import Mongoose key
const db = require('./config/keys').mongoURI;
// Import routes
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

// Connect to MongoDB using Mongoose
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

  // Middleware for body parser
  // IMP! Must be above routes
  app.use(bodyParser.urlencoded({ extended: false}));
  app.use(bodyParser.json());
  
  // Tell Express to use the imported routes
  app.use("/api/users", users);
  app.use("/api/tweets", tweets);
  app.get("/", (req, res) => res.send("Hello Was"));


app.listen(port, () => console.log(`Server is running on port ${port}`));