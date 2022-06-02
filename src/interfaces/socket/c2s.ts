// ******************** //
// Interfaces for the client to server events of Socket.IO
// ******************** //

import { FetchProfileIdResult } from 'interfaces/events/account/fetchProfileId';
import { LogoutResult } from 'interfaces/events/account/logout';
import {
    FetchProfileDataParams,
    FetchProfileDataResult,
} from 'interfaces/events/account/fetchProfileData';
import { IsLoggedInResult } from 'interfaces/events/general/isLoggedIn';
import { LoginParams, LoginResult } from 'interfaces/events/noAccount/login';
import {
    LoginTokenParams,
    LoginTokenResult,
} from 'interfaces/events/noAccount/loginToken';
import {
    RegisterParams,
    RegisterResult,
} from 'interfaces/events/noAccount/register';

export interface ClientToServerEvents {
    register: (
        {}: RegisterParams,
        callback?: ({}: RegisterResult) => void
    ) => void;

    login: ({}: LoginParams, callback?: ({}: LoginResult) => void) => void;

    loginToken: (
        {}: LoginTokenParams,
        callback?: ({}: LoginTokenResult) => void
    ) => void;

    isLoggedIn: (callback?: ({}: IsLoggedInResult) => void) => void;

    fetchProfileId: (callback?: ({}: FetchProfileIdResult) => void) => void;

    fetchProfileData: (
        {}: FetchProfileDataParams,
        callback?: ({}: FetchProfileDataResult) => void
    ) => void;

    logout: (callback?: ({}: LogoutResult) => void) => void;
}
