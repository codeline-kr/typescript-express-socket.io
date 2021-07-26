import { createServer } from 'http';
import { Server } from 'socket.io';
import { IApplication } from './express.app';

import handler from './socket.handler';
import express from 'express';

const app: IApplication = express();
const http = createServer(app);
const io = new Server(http, {
    cors: {
        origin: 'http://127.0.0.1:5500',
    },
});

app.io = io;

io.on('connection', (socket) => {
    console.log('connected', socket.id);

    handler(socket, io);
});

app.get('/', (_, res) => {
    res.send('hi');
});

const port = process.env.PORT || 3000;
http.listen(port || 3000, () => {
    console.log(`server listen on port ${port}`);
});
