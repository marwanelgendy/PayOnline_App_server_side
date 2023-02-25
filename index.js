const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')

//Controllers
const logInUser = require('./contoller/login')
const registerUser = require('./contoller/register')

//create app
const app = express()

// connect to DB
const url = config.mongoUrl
const connect = mongoose.connect(url)

connect.then(dp => {
    console.log("Connect to DB successfuly")
}, err => {console.log(err)})

// parse incoming requests
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// set port
let port = process.env.PORT

if(port == null || port == "") port = 4300

app.listen(port , ()=>{
    console.log("App Listening to port 4300")
})

//Routes

// Login & Register
app.post('/login' , logInUser)
app.post('/register' , registerUser)