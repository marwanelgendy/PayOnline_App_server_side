const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username : {
        type : String,
        required : [true , "Please provide username"],
        unique : true
    },
    firstname: {
        type : String
    },
    secondname: {
        type : String
    },
    password : {
        type: String,
        required : [true , "please provide pasword"]
    },
    balance: {
        type: Number,
        default : 0
    },
    bills : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'bills'
        }
    ]
})

userSchema.plugin(uniqueValidator)

userSchema.pre('save' , function(next){
    let user = this

    bcrypt.hash(user.password , 10 , (err , hash) =>{
        user.password = hash
        next()
    })
})


const User = mongoose.model("Payapp_users" , userSchema);

module.exports = User