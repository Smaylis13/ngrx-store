import { Action } from "rxjs/scheduler/Action";
import * as BlockchainActions from './../actions/blockchain.actions'
import { Blockchain } from "../models/blockchain.model";


export function reducer(state: Blockchain[] = [], action: BlockchainActions.Actions){
    switch(action.type){
        case BlockchainActions.ADD_COIN:
            return [...state, action.payload];
        case BlockchainActions.REMOVE_COIN:
            return state.filter(bc => bc.name != action.payload) ;
        default:
            return state;
    }
}