export interface FronvoError {
    err: {
        msg: string;
        code: number;
        name: string;
        extras?: {
            for?: string;
            min?: number;
            max?: number;
        };
    };
}

export interface FronvoParams {
    token: string;
}

export type FronvoEventNames = 'ready';

export interface FronvoEvent {
    name: string;
    callback: () => void;
}

export type FronvoCallback = ({}: FronvoResult) => void;

export interface FronvoResult {
    err?: FronvoError;
    remainingPoints: number;
}

export type FronvoEnvValues = 'SERVER_URL';

export interface FronvoAPIError {
    code: number;
    name: string;
}
