// ******************** //
// Interfaces for the login event.
// ******************** //

import { FronvoResult } from 'interfaces/all';

export interface LoginParams {
    email: string;
    password: string;
}

export interface LoginResult extends FronvoResult {
    token: string;
}
