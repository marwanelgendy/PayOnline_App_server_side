const User = require('../models/User')
const mongoose = require('mongoose')

module.exports = (req ,res , next) =>{
    const userId = req.params.userId
    User.findById(mongoose.Types.ObjectId(userId))
    .then(user => {
        res.status(200).json({user : user}).end()
    })
}