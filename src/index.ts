// **************************************************************** //
//               The official JS/TS API of Fronvo                   //
// **************************************************************** //

import { Event, EventNames, FronvoParams } from 'interfaces/fronvo';
import { generateError } from 'other/utils';
import { io } from 'socket.io-client';
// @ts-ignore
import binaryParser from 'socket.io-msgpack-parser';
import { serverUrl, setSocket, socket } from 'variables/global';

export class Fronvo {
    // To determine connection status
    private hasConnected!: boolean;

    // The registered bot events
    private _events: { [key: string]: Event } = {};

    constructor(params: FronvoParams) {
        this._connect(params.token);
    }

    private _connect(token: string): void {
        if (this.hasConnected) {
            throw generateError('ALREADY_CONNECTED');
        }

        // Create the socket client
        setSocket(
            io(serverUrl, {
                transports: ['websocket'],
                path: '/fronvo',
                parser: binaryParser,
            })
        );

        // Create connect handle
        socket.on('connect', () => {
            this.hasConnected = true;

            this._login(token);
        });

        // Set connection timeout
        setTimeout(() => {
            if (!this.hasConnected) {
                throw generateError('CONNECTION_FAILURE');
            }
        }, 2000);
    }

    private _login(token: string): void {
        socket.emit('loginToken', { token }, ({ err }) => {
            if (err) {
                throw generateError('INVALID_TOKEN');
            } else {
                this._callEvent('ready');
            }
        });
    }

    private _callEvent(event: EventNames): void {
        // Doesnt matter if not registered, move on
        if (!(event in this._events)) return;

        this._events[event].callback();
    }

    event(name: EventNames, callback: () => void): void {
        // Dont allow duplicate events
        if (name in this._events) {
            throw generateError('EVENT_EXISTS', [name]);
        }

        // Must be uniquely named
        this._events[name] = {
            name,
            callback,
        };
    }
}
