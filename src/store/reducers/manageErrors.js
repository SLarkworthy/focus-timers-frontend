import * as actionTypes from "../actions";

export default function manageErrors(state = {
    errors: []
}, action) {
    switch(action.type) {
        case actionTypes.ADD_ERROR:
            return {
                ...state,
                errors: [...state.errors, action.error]
            }
        case actionTypes.CLEAR_ERRORS:
            return {
                errors: []
            }
            
        default:
            return state;
    }
}