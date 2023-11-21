const NewsModel = require('../models/news.model')

module.exports.Addnews = async (req, res) => {

    const { title, desc, createdby } = req.body;
    await NewsModel.insertMany({ title, desc, createdby })
    res.json({message:'success'})

    
}