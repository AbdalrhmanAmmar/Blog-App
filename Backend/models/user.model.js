const mongoose = require('mongoose')

const SchemaUser = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,

})

module.exports = mongoose.model('User', SchemaUser);
