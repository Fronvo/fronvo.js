// ******************** //
// Interfaces for the client to server events of Socket.IO
// ******************** //

import { FetchProfileIdResult } from 'interfaces/events/account/fetchProfileId';
import { LogoutResult } from 'interfaces/events/account/logout';
import {
    FetchProfileDataParams,
    FetchProfileDataResult,
} from 'interfaces/events/account/fetchProfileData';
import {
    LoginTokenParams,
    LoginTokenResult,
} from 'interfaces/events/noAccount/loginToken';

export interface ClientToServerEvents {
    loginToken: (
        {}: LoginTokenParams,
        callback?: ({}: LoginTokenResult) => void
    ) => void;

    fetchProfileId: (callback?: ({}: FetchProfileIdResult) => void) => void;

    fetchProfileData: (
        {}: FetchProfileDataParams,
        callback?: ({}: FetchProfileDataResult) => void
    ) => void;

    logout: (callback?: ({}: LogoutResult) => void) => void;
}
