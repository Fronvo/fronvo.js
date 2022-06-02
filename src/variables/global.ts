import { config } from 'dotenv';
import { ClientToServerEvents } from 'interfaces/socket/c2s';
import { ServerToClientEvents } from 'interfaces/socket/s2c';
import { resolve } from 'path';
import { Socket } from 'socket.io-client';
import { getEnv } from './varUtils';

// Load environmental variables
config({ path: resolve(__dirname, '../../.env') });

export let socket: Socket<ServerToClientEvents, ClientToServerEvents>;

export let serverUrl: string = getEnv(
    'SERVER_URL',
    'wss://fronvosrv.herokuapp.com'
);

export function setSocket(socketObj: Socket): void {
    socket = socketObj;
}
