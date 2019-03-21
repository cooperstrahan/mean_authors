const { Author } = require('../models/authorModel');

module.exports = {

  getAll: (req, res) => {
    Author.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getOne: (req, res) => {
    const ID = req.params.id;
    Author.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createAuthor: (req, res) => {
    const DATA = req.body;
    Author.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  editAuthor: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Author.updateOne({_id:ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  addBook: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Author.updateOne({_id:ID},{$push: {books: DATA}}, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateBook: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Author.updateOne({_id:ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  delete: (req, res) => {
    const ID = req.params.id;
    Author.findOneAndDelete({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

}