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
            
        default:
            return state;
    }
}