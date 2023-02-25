const User = require('../models/User')

module.exports = (req , res , next) =>{
    User.create(req.body , (err , user)=>{
        if(err){
            console.log(err)
        }

        res.status(200).end()
    })
}