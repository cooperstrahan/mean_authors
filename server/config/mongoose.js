const mongoose = require('mongoose');

module.exports = {
    mongoose: mongoose.connect('mongodb://localhost/author_data', 
        {useNewUrlParser: true})
}