const Transfers = require('../models/Transfer')
const mongoose = require('mongoose')

module.exports = (req ,res , next) =>{
    
    Transfers.find({$or : [{sender : mongoose.Types.ObjectId(req.query.id)} , {reciever : mongoose.Types.ObjectId(req.query.id)}]})
    .populate('sender')
    .populate('reciever')
    .then(transfer => {
        res.status(200).json({transfer : transfer}).end()
    })
}