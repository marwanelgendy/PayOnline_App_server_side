const User = require('../models/User')
const mongoose = require('mongoose')

module.exports = (req ,res , next) =>{

    User.findOne({username : req.query.username} ,(error , user)=>{
        if(error || user == null){
            res.status(400)
            .json({
              status : 'Falid',
              message : "This username not exist"  
            }).end()
            return;
        }

        res.status(200).json({user : user}).end()
        return
    })
    
}