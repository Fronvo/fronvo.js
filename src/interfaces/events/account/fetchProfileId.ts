// ******************** //
// Interfaces for the fetchProfileId event.
// ******************** //

import { FronvoResult } from 'interfaces/all';

export interface FetchProfileIdParams {}

export interface FetchProfileIdResult extends FronvoResult {
    profileId: string;
}
