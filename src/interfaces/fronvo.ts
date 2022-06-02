export interface FronvoParams {
    token: string;
}

export type EventNames = 'ready';

export interface Event {
    name: string;
    callback: () => void;
}
