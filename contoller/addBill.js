const mongoose = require('mongoose')
const Bill = require('../models/Bill')

module.exports = (req , res , next)=>{
    Bill.create(req.body , (err , bill) =>{
        if(err){
            console.log(err)
            res.status(400).json({status: 'faild'}).end()
            return
        }

        res.status(200).json({bill : bill}).end()
        return
    })
}