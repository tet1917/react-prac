const express = require('express');
const{ createServer } = require('node:http');
const app = express();
const server = createServer(app);
const { Server } =require("socket.io")
const io =  new Server(server,{
  cors : {
    origin:"http://localhost:3000",
  },
});

const PORT = 4500;
io.on("connection", (socket) => {
  console.log("ユーザーと接続しました。"
  + "socket-id:" + socket.id);

  // ルームに入る時のソケット設定。
  socket.on("join_room",(data) => {
    socket.join(data);
    console.log(`ユーザID:${socket.id}が${data}に参加しました`)
  })

  socket.on("disconnect", () => {
    console.log("ユーザーとの接続が切れました" + "socket-id:" + socket.id);
  });
});

server.listen(PORT ,() => {
  console.log(`listening on ${PORT}`);
});

