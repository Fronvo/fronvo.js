// ******************** //
// All API errors
// ******************** //

import { Errors } from '../other/types';

export const errors: { [key in Errors]: string } = {
    ALREADY_CONNECTED: 'The bot has already connected to Fronvo!',
    CONNECTION_FAILURE: 'Failed to connect to Fronvo.',
    INVALID_TOKEN: 'An invalid token has been passed!',
    EVENT_EXISTS: "Event '%s' has already been registered!",
};
