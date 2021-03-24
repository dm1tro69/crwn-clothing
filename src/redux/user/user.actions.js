import {UserActionsTypes} from "./user.types";


export const setCurrentUser = (user) => {
    return {
        type: UserActionsTypes.SER_CURRENT_USER,
        payload: user
    }
}