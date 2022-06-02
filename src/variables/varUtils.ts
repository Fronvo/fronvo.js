import { EnvValues } from 'interfaces/all';

export function getEnv(value: EnvValues, fallback?: any): any {
    return process.env[`FRONVO_${value}`] || fallback;
}
