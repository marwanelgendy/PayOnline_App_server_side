const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transferSchema = new Schema({
    Amount: {
        type: Number
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payapp_users'
    },
    reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payapp_users'
    },
    date: {
        type: String
    }
})

const Transfers = mongoose.model('transfers' , transferSchema)

module.exports = Transfers