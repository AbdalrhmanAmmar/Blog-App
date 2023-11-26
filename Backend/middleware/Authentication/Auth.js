const jwt = require('jsonwebtoken');
 
module.exports.auth = (req, res, next) => {
    const { token } = req.body
    
    jwt.verify(token, 'holmes', async function (err, decoded) {
        
        if (err) {
            res.json(err);
        } else {
           next()

            
        }
})
    
}

