const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const cors = require('cors')

//Controllers
const logInUser = require('./contoller/login')
const registerUser = require('./contoller/register')
const getUser = require('./contoller/getUser')
const addBill = require('./contoller/addBill')
const getBill = require('./contoller/getBill')
const addTransfer = require('./contoller/addTransfer')
const getTransfer = require('./contoller/getTransfer')
const addBillOrTransferToUser = require('./contoller/addBillOrTransferToUser')
const updateBalance = require('./contoller/updateBalance')
const getUserByName = require('./contoller/getUserByName')

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
app.use(cors())

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

// Get Info
app.get('/getUser/:userId' , getUser)
app.get('/getUserByName' , getUserByName)

// Bill
app.post('/addBill' , addBill)
app.get('/getBill/:billId' , getBill)

// Transfer
app.post('/addTransfer' , addTransfer)
app.get('/getTransfers' , getTransfer)

// Update User
app.post('/updateUser/:userId' , addBillOrTransferToUser)

// Update Balance
app.post('/updateBalance/:userId' , updateBalance)