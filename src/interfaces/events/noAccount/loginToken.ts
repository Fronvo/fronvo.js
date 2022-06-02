// ******************** //
// Interfaces for the loginToken event.
// ******************** //

import { FronvoResult } from 'interfaces/all';

export interface LoginTokenParams {
    token: string;
}

export interface LoginTokenResult extends FronvoResult {}
