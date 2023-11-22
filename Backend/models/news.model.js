const mongoose = require('mongoose')

const Schemanotes = mongoose.Schema({
    title: String,
    desc: String,
    createdby: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user'
    }
    
}, {
    timestamps:true
})

const NewsModel = mongoose.model('new', Schemanotes);
   module.exports = NewsModel

