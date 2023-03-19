const User = require('../models/User')
const Bill = require('../models/Bill')
const mongoose = require('mongoose')

module.exports = (req , res , next)=>{

    
    const userId = req.body.userId
    const billId = req.body.billId
    const amount = req.body.amount

    User.findById(mongoose.Types.ObjectId(userId) , (err , user)=>{
        const oldBalance = user.balance
        
        if(amount > oldBalance){
            res.status(400).json({msg : "Your balance is not enough to pay the bill"})
            return
        }


        User.findByIdAndUpdate({_id :mongoose.Types.ObjectId(userId)}, {$set : {"balance" : oldBalance - amount}} , {new : true})
        .then(user =>{
            
        })
       

        Bill.findByIdAndUpdate({_id : mongoose.Types.ObjectId(billId)} ,
         {$set : {"status" : "Closed" , "deadLineDate" : new Date().toLocaleDateString()}} , {new : true})
         .then(bill => {
            res.status(200).json({bill : bill}).end()
         })
    })
}