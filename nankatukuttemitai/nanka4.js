const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let player1Choice = null;
let player2Choice = null;

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('choose', (choice) => {
    if (!player1Choice) {
      player1Choice = choice;
    } else if (!player2Choice) {
      player2Choice = choice;
      io.emit('result', { player1Choice, player2Choice });
      player1Choice = null;
      player2Choice = null;
    }
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});