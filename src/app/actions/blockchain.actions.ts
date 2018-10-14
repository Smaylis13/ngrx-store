import { Action } from '@ngrx/store'
import { Blockchain } from '../models/blockchain.model';

export const ADD_COIN       = "ADD_COIN";
export const REMOVE_COIN    = 'REMOVE_COIN';

export class AddCoin implements Action {
    readonly type = ADD_COIN;

    constructor(public payload: Blockchain) {}
}

export class RemoveCoin implements Action {
    readonly type = REMOVE_COIN;

    constructor(public payload: string) {}
}

export type Actions = AddCoin | RemoveCoin;