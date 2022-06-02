// ******************** //
// Interfaces for the register event.
// ******************** //

import { FronvoResult } from 'interfaces/all';

export interface RegisterParams {
    email: string;
    password: string;
}

export interface RegisterResult extends FronvoResult {
    token: string;
}
