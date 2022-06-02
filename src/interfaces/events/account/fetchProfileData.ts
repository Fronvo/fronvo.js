// ******************** //
// Interfaces for the fetchProfileData event.
// ******************** //

import { FronvoResult } from 'interfaces/all';

export interface FetchProfileDataParams {
    profileId: string;
}

export interface FetchProfileDataResult extends FronvoResult {
    profileData: Partial<FronvoAccount>;
}

interface FronvoAccount {
    username: string;
    email: string;
    password: string;
    creationDate: Date;
}
