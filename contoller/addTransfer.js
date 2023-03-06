const mongoose = require('mongoose')
const Transfer = require('../models/Transfer')

module.exports = (req , res , next)=>{
    Transfer.create(req.body , (err , transfer) =>{

        console.log(err)
        if(err){
            res.status(400).json({status: 'faild'}).end()
            return
        }

        res.status(200).json({transfer : transfer}).end()
        return
    })
}