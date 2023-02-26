const mongoose = require('mongoose')
const Schema = mongoose.Schema

const billSchema = new Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    provider: {
        type: String
    },
    price: {
        type: String
    },
    status: {
        type: String
    },
    issuedDate: {
        type: Date
    },
    deadLineDate: {
        type: Date
    }
})

const Bill = mongoose.model('bills' , billSchema)

module.exports = Bill