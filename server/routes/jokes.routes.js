// in the jokes.routes file: import * from your controller file and add an express route for every route listed in the wireframe
const JokeController = require("../controllers/jokes.controller");

module.exports = (app) =>{
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.oneJoke);
    app.post("/api/jokes", JokeController.createJoke);
    app.put("/api/jokes/:id", JokeController.updateJoke)
    app.delete("/api/jokes/:id", JokeController.deleteJoke)
};


