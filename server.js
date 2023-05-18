// In your server.js file: setup express, import your joke routes, and run your server
const express = require("express");
const app = express();
const PORT = 8000
const DB = "jokesapi";

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connect to database using Mongoose
require("./config/mongoose.config")(DB);

//Import routes
require("./routes/jokes/.route")(app);

//Run Server
app.listen(PORT, () => console.log("Server is running on Port ${PORT}"));

