const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
//origin is which server is gonna be calling and making the calls to our socket io server
//the origin url is where our react application is gonna be running

//socket io works on events so you emit an event and you look for detecting and listening to an event
io.on("connection", (socket) => {
  console.log("connection success");
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`username with id ${socket.id} joined room ${data}`);
  });
  socket.on("send_msg", (data) => {
    socket.to(data.room).emit("receive_msg", data);
    // so we send data from client and then from here we emit it to the room we are in so that everyone can see the message
  });
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});
//we are listening for an event with this id or connection and all codde should be inside this only
//we sent data from client now we need to figure out how we send msg sent by one user to another user

server.listen(3001, () => {
  console.log("server running");
});
//so we are sending data from frontend to backemd without using http
