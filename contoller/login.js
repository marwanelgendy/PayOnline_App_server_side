const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = (req , res , next)=>{

    const {username , password} = req.body

    User.findOne({username : username} , (err , user)=>{
        if(user){
            bcrypt.compare(password , user.password , (err , same)=>{
                if(same){
                    res.status(200).json({status : "Success" , user : user}).end()
                    return
                }
                else{
                    res.status(400).json({
                        status : "Faild",
                        message : "Incorrect Password"
                    }).end()
                    return
                }
            })
        }
        else{
            res.status(400).json({
                status : "Faild",
                message : "User doesn't exist"
            }).end()
            return
        }
    })
}