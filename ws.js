let express = require("express");
let path = require("path");
let http = require("http");
let socketIo = require("socket.io");

//setting up the server 
let app = express();
let server = http.createServer(app);

//setup statistics
app.use(express.static(path.join(__dirname, "Vehicle-Management-System")));

//websocket setup
let io = socketIo(server);

io.on("connection", function(socket){

   socket.emit("connection Confirmed");

   socket.on("request", function(msg){

    socket.emit("Server Responses");

   })
})