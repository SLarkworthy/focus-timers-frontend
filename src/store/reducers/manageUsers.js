import * as actionTypes from "../actions";

export default function manageUsers(state = {
    loggedIn: false,
    currentUser: {}
}, action) {
    switch(action.type) {
        case actionTypes.SIGNUP:
            return {
                ...state,
                loggedIn: true,
                currentUser: action.user
            }
        case actionTypes.LOGIN:
            return {
                ...state,
                loggedIn: true,
                currentUser: action.user
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                loggedIn: false,
                currentUser: {}
            }
            
        default:
            return state;
    }
}