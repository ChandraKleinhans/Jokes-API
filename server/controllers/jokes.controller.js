//import jokes model
const Joke = require("../models/jokes.model");

// Export a function to get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json(allJokes);
        })
        .catch((err) =>
            res.json({ message: "Something went horribly wrong", serverError: err }));
};

// Export a function to get a single joke
module.exports.oneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then((oneJoke) => res.json({ joke: oneJoke }))
        .catch((err) =>
            res.json({ message: "I can't find that joke. :(", serverError: err }));
};

// Export a function to create a joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => res.json({ joke: newJoke }))
        .catch((err) =>
            res.json({ message: "Some people just can't make a joke! (Your joke wasn't created.)", serverError: err }));
};

// Export a function to update a joke
module.exports.updateJoke = (req, res) =>{
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedJoke) => res.json({joke: updatedJoke}))
        .catch((err) =>
            res.json({message: "I couldn't update that joke...something must be wrong.", serverError: err}));
};

// Export a function to delete a joke
module.exports.deleteJoke = (req, res) =>{
    Joke.deleteOne({_id: req.params.id})
        .then((result) => res.json({result: result}))
        .catch((err) =>
            res.json({message: "You can't get rid of a joke that easily! JK - something went wrong and I can't delete that joke.", serverError: err}));
};