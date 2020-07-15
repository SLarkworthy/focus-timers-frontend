import * as actionTypes from "../actions";

export default function manageTimers(state = {
    userTimers: []
}, action) {
    switch(action.type) {
        case actionTypes.ADD_TIMER:
            return {
                ...state,
                userTimers: [...state.userTimers, action.timer]
            }
        case actionTypes.DELETE_TIMER:
            const timers = state.userTimers.filter(timer => timer.id !== action.timer.id)
            return {
                ...state,
                userTimers: timers
            }
        case actionTypes.PATCH_TIMER:
            const updatedTimers = state.userTimers.map(timer => {
                if (timer.id === action.timer.id) {
                    return action.timer;
                } else {
                     return timer;
                }
            })
            return {
                ...state,
                userTimers: updatedTimers
            }
        case actionTypes.DELETED_TIMERS:
            console.log("DELETED TIMERS")
            return {
                ...state,
                userTimers: []
            }
            
        default:
            return state;
    }
}