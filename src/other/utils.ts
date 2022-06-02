// ******************** //
// Reusable functions for all kinds of events.
// ******************** //

import { FronvoAPIError } from 'interfaces/all';
import { format } from 'util';
import { errors } from './errors';
import { Errors } from '../other/types';

export function generateError(
    error: Errors,
    formatParams?: any[]
): FronvoAPIError {
    let name = errors[error];

    if (formatParams) name = format(name, ...formatParams);

    return {
        code: Object.keys(errors).indexOf(error) + 1,
        name,
    };
}
