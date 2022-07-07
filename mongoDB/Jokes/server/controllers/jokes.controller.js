const Jokes = require('../models/jokes.model');
 
module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then((allJokes) => {
            res.json( allJokes )
        })
        .catch((err) => {
            console.log('Error in get all', err);
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSingleJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json( oneSingleJoke )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newlyCreatedJoke => {
            res.json( newlyCreatedJoke )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateExistingJoke = (req, res) => {
    Jokes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json( updatedJoke )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteAnExistingJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json( result )
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
