// ******************** //
// Interfaces for the isLoggedIn event.
// ******************** //

import { FronvoResult } from 'interfaces/all';

export interface isLoggedInParams {}

export interface IsLoggedInResult extends FronvoResult {
    loggedIn: boolean;
}
