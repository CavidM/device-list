import { Server } from 'socket.io'
const jwt = require('jsonwebtoken');

export const ioClient = new Server(3002, {
  cors: {
    origin: "*"
  }
});

ioClient.on('connection', (socket) => {
  console.log('Client connected', socket.id);

  if (socket.id) {
    const payload = {
      socketId: socket.id
    };
    const token = jwt.sign(payload, process.env.AUTH_SECRET, {
      expiresIn: 30 * 86400 // expires in 30 days
    });

    socket.emit<WsEvents>('authenticateUser', {
      token: token
    })
  }

});

export type WsEvents = 'authenticateUser' | 'quantityChanged';

