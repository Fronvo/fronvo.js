import { FronvoEnvValues } from 'interfaces/all';

export function getEnv(value: FronvoEnvValues, fallback?: any): any {
    return process.env[`FRONVO_${value}`] || fallback;
}
