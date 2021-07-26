import { Application } from 'express';
import { Server } from 'socket.io';

export interface IApplication extends Application {
    io?: Server;
}
