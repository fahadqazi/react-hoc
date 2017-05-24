import {
    CHANGE_AUTH
} from './types';

export function authenticate(isLoggedin){
    return {
        type: CHANGE_AUTH,
        payload: isLoggedin
    }
}