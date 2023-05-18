// import mongoose
const mongoose = require("mongoose");

// create schema - format for schema to follow
const JokeSchema = new mongoose.Schema(
  {
    setup: String,
    punchline: String,
  },
  { timestamps: true }
);

// the model - what we use to make queries
const Joke = mongoose.model("joke", JokeSchema);

// export the model
module.exports = Joke;