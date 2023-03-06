const Bill = require('../models/Bill')
const mongoose = require('mongoose')

module.exports = (req ,res , next) =>{
    Bill.findById(mongoose.Types.ObjectId(req.params.billId))
    .then(bill => {
        res.status(200).json({bill : bill}).end()
    })
}