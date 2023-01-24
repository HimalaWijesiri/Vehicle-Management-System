const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const ws = require("./ws");
const port = process.env.port || 8080 //this is used for server port 
const authRoute = require('./Routes/auth-route');
const mongoose = require('mongoose');
const cors = require('cors');
const server = require('http').Server(app);
const io = require('socket.io')(server);

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

io.on('connection', function(socket) {
    console.log('A user connected');
    
    // Handle chat messages
    socket.on('message', function(msg) {
      io.emit(' message', msg);
    });
  
    // Handle disconnections
    socket.on('disconnect', function() {
      console.log('A user disconnected');
    });
  });
  
  server.listen(3000, function() {
    console.log('listening on : 3000');
  });