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
        type: Number
    },
    reciever: {
        type: String
    },
    date: {
        type: Date
    }
})

const Transfers = mongoose.model('transfers' , transferSchema)

module.exports = Transfers