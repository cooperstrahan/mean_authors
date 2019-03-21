const mongoose = require('mongoose');
require('../config/mongoose.js');

// const BookSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         default: ""
//     },
// }, {timestamps:true});

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        minlength: 2
    },
    birthday: {
        type: Date,
        required: true,
    },
    books: [{
        title: {
            type: String,
            default: ""
        },
        votes: {
            type: Number,
            default: 0
        }
    }],  
}, {timestamps:true});

module.exports = { 
    Author: mongoose.model('Author', AuthorSchema)
}