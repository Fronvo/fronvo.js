// ******************** //
// Interfaces for the fetchProfileData event.
// ******************** //

import { FronvoResult } from 'interfaces/all';

export interface FetchProfileDataParams {
    profileId: string;
}

export interface FetchProfileDataResult extends FronvoResult {
    profileData: FronvoAccount;
}

export interface FronvoAccount {
    username: string;
    email?: string;
    creationDate: string;
}
