const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transferSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    Amount: {
        type: String
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