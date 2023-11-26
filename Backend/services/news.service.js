const NewsModel = require('../models/news.model')

module.exports.Addnews = async (req, res) => {

    const { title, desc, createdby } = req.body;



                  await NewsModel.insertMany({ title, desc, createdby })
    res.json({message:'success'})


  

    
}

module.exports.getnews = async (req, res) => {
    const news = await NewsModel.find({}).populate('createdby', 'name -_id')

    res.json({news})
}

module.exports.usernews = async (req, res) => {
    const { createdby } = req.header('id')
    console.log(createdby)
    const news = await NewsModel.find({ createdby })
    
    res.json({msg:'sucssess', news})
}

module.exports.Update = async (req, res) => { 
    const { title, desc, _id } = req.body;
    await NewsModel.findByIdAndUpdate({ _id }, { title, desc })
    



    res.json('sucssess',)
    


}

module.exports.deletenwes = async (req, res) => { 
    const { _id } = req.body
    
    await NewsModel.deleteOne({ _id })
    
    res.json("delted")
}