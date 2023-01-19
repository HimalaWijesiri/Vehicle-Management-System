const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.port || 8080 //this is used for server port 
const authRoute = require('./Routes/auth-route');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://himala007:codingmedusa007@cluster0.cxbiykq.mongodb.net/Vehicle-Management-System', (err)=>{
    if(err){
        console.log("Database not Connected!");
    }else{
        console.log("DB is Connected...");
    }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.use('/auth', authRoute);
app.get('/', (req,res)=>{
    res.send("Welcome to the Server!")
})

app.listen(port, ()=>{
    console.log("Node server is connected: ",port)
})