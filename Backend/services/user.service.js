const UserModel = require('../models/user.model')
module.exports.Signup = async (req, res) => {
    const { name, email, password, age } = req.body
    const useremail = UserModel.findOne({ email })
    
    if (useremail) {
        res.json('this email is already in use')
    } else {
        await UserModel.insertMany({ name, email, password, age })
    
    res.json({msg:'success'})
    }

    
}

