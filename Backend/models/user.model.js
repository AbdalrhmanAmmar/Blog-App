const mongoose = require('mongoose')

const SchemaUser = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,

})

const UserModel = mongoose.model('user', SchemaUser);

module.exports = UserModel
