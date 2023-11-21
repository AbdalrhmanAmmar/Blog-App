const mongoose = require('mongoose')

const Schemanotes = mongoose.Schema({
    title: String,
    desc: String,
    createdby: mongoose.SchemaTypes.ObjectId,
    
}, {
    timestamps:true
})

const NewsModel = mongoose.model('new', Schemanotes);
   module.exports = NewsModel

