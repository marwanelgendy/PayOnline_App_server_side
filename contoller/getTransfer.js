const Transfers = require('../models/Transfer')
const mongoose = require('mongoose')

module.exports = (req ,res , next) =>{
    
    Transfers.findById(mongoose.Types.ObjectId(req.params.transferId))
    .populate('reciever')
    .then(transfer => {
        res.status(200).json({transfer : transfer}).end()
    })
}