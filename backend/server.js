const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"], // Allow multiple origins
        methods: ["GET", "POST"],
    },
});

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    
    socket.on('SendMessage', (message) => {
        console.log('Message:', message);
        io.emit('ReceiveMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
    });
});

server.listen(4000, () => {
    console.log('listening on *:4000');
});
