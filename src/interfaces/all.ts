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

export type FronvoCallback = ({}: FronvoResult) => void;

export interface FronvoResult {
    err?: FronvoError;
    remainingPoints: number;
}

export type EnvValues = 'SERVER_URL';

export interface FronvoAPIError {
    code: number;
    name: string;
}
