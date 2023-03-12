const User = require('../models/User')
const mongoose = require('mongoose')

module.exports = (req , res , next)=>{
    User.findByIdAndUpdate({_id : mongoose.Types.ObjectId(req.params.userId)} , {$set:{"balance" : req.body.balance}} , {new : true})
    .then(user =>{
        res.status(200).json({user : user}).end()
    })
}