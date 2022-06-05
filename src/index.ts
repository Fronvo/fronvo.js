// **************************************************************** //
//               The official JS/TS API of Fronvo                   //
// **************************************************************** //

import {
    FronvoBotInfo,
    FronvoEvent,
    FronvoEventNames,
    FronvoParams,
} from 'interfaces/all';
import { generateError } from 'other/utils';
import { io } from 'socket.io-client';
// @ts-ignore
import binaryParser from 'socket.io-msgpack-parser';
import { serverUrl, setSocket, socket } from 'variables/global';

// TODO: Extend event classes, maybe combine to one due to limitations
export class Fronvo {
    // To determine connection status
    private _hasConnected!: boolean;

    // The registered bot events
    private _events: { [key: string]: FronvoEvent } = {};

    // Bot data
    info!: FronvoBotInfo;

    constructor(params: FronvoParams) {
        this._connect(params.token);
    }

    private _connect(token: string): void {
        if (this._hasConnected) {
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
            this._hasConnected = true;

            this._afterConnect(token);
        });

        // Set connection timeout
        setTimeout(() => {
            if (!this._hasConnected) {
                throw generateError('CONNECTION_FAILURE');
            }
        }, 2000);
    }

    private _afterConnect(token: string): void {
        // Attempt to login with provided token
        socket.emit('loginToken', { token }, ({ err }) => {
            if (err) {
                throw generateError('INVALID_TOKEN');
            } else {
                // Get bot id
                socket.emit('fetchProfileId', ({ profileId }) => {
                    socket.emit(
                        'fetchProfileData',
                        { profileId },
                        ({ profileData }) => {
                            // Spread bot data
                            const { username, creationDate } = {
                                ...profileData,
                            };

                            // Fill in bot info
                            this._fillBot({
                                id: profileId,
                                username,
                                creationDate,
                            });

                            // Finally, call 'ready'
                            this._callEvent('ready');
                        }
                    );
                });
            }
        });
    }

    private _callEvent(event: FronvoEventNames): void {
        // Doesnt matter if not registered, move on
        if (!(event in this._events)) return;

        this._events[event].callback();
    }

    private _fillBot(botInfo: FronvoBotInfo): void {
        // This is a trusted parameter, no sensitive info
        this.info = { ...botInfo };
    }

    event(name: FronvoEventNames, callback: () => void): void {
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
