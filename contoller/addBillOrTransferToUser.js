const Transfers = require('../models/Transfer')
const mongoose = require('mongoose')
const Bill = require('../models/Bill')
const User = require('../models/User')

module.exports = (req ,res , next) =>{
    
    let type = req.query.type
    let userId = req.params.userId
    let body = req.body.data

    if(type === 'bill'){
        User.updateOne({_id : mongoose.Types.ObjectId(userId)} , {$push:{"bills":{$each:body}}})
        .then(user =>{
            res.status(200).json({user : user}).end()
        })
    }
    else{
        User.updateOne({_id : mongoose.Types.ObjectId(userId)} , {$push:{"transfers":{$each:body}}})
        .then(user =>{
            res.status(200).json({user : user}).end()
        })
    }
}