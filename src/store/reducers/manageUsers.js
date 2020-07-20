import * as actionTypes from "../actions";

export default function manageUsers(state = {
    loggedIn: false,
    currentUser: {},
    loadingSession: false
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
                currentUser: action.user,
                loadingSession: false
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                loggedIn: false,
                currentUser: {}
            }
        case actionTypes.LOADING_SESSION_STATUS:
            console.log("LSS");
            return {
                ...state,
                loggedIn: false,
                currentUser: {},
                loadingSession: true
            }
            
        default:
            return state;
    }
}