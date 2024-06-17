const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// 静的ファイルを提供
app.use(express.static('public'));

let cloudVariables = {};

io.on('connection', (socket) => {
    console.log('New client connected');

    // クライアントに現在のクラウド変数を送信
    socket.emit('initialize', cloudVariables);

    // クライアントからのクラウド変数の更新を処理
    socket.on('updateVariable', (data) => {
        cloudVariables[data.name] = data.value;
        io.emit('variableUpdated', data); // 全てのクライアントに更新を通知
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(4000, () => console.log('Listening on port 4000'));