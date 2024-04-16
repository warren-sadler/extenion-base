import {updateAccount} from './update-account'

export const service = {
    updateAccount
} as const;


export type Service = typeof service;