const mongoose = require('mongoose')

const Schemanotes = mongoose.Schema({
    title: String,
    desc: String,
    createdby: mongoose.SchemaTypes.ObjectId,
    
}, {
    timestamps:true
})

module.exports = mongoose.model('note', Schemanotes);
