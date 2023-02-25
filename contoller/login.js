const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = (req , res , next)=>{

    const {username , password} = req.body

    User.find({username : username} , (err , user)=>{
        if(user){
            bcrypt.compare(password , user.password , (err , same)=>{
                if(same){
                    res.status(200).end()
                }
                else{
                    console.log(err)
                }
            })
        }
        else{
            console.log(err)
        }
    })
}