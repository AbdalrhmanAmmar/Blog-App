const UserModel = require('../models/user.model')
const bcrypt = require('bcrypt')

module.exports.Signup = async (req, res) => {
    const { name, email, password, age } = req.body
    const useremail =await UserModel.findOne({ email })
    
    if (useremail) {
        res.json('this email is already in use')
    } else {
        bcrypt.hash(password, 4, async function (error, hash) {
               await UserModel.insertMany({ name, email, password:hash, age })
    
    res.json({msg:'success'})
    
})

     
    }

    
}




module.exports.Login = async (req, res) => { 
    const { email, password } = req.body
    let user = await UserModel.findOne({ email })

    if (user) {
        const match = await bcrypt.compare(password, user.password)
        if (match ) {
            res.json({user})
        } else {
            res.send('password not correct')
        }
    } else {
        res.send('email not found')
    }
}
