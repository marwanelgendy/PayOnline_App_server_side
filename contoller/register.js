const User = require('../models/User')

module.exports = (req , res , next) =>{

    User.create(req.body , (err , user)=>{
        if(err){
            res.status(400)
            .json({
              status : 'Falid',
              message : "This username already exists please use a unique one"  
            }).end()
            return;
        }

        res.status(200).json({status : "Success"}).end()
    })
}