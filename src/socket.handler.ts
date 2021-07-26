import { Server, Socket } from 'socket.io';

export default (socket: Socket, io: Server) => {
    socket.on('message:create', (data, callback) => {
        console.log('message:create data', data);

        io.emit('message:added', data);

        callback && callback('ok');
    });

    socket.on('message:list', (data) => {
        console.log('message:list data', data);

        io.emit('hello', 'hello world!');
    });
};
