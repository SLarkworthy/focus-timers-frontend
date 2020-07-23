import * as actionTypes from "../actions";

export default function manageErrors(state = {
    errors: []
}, action) {
    switch(action.type) {
        case actionTypes.ADD_ERROR:
            return {
                ...state,
                quote: action.quote,
            }
        case actionTypes.CLEAR_ERRORS:
            return {
                ...state,
                quote: [],
            }
            
        default:
            return state;
    }
}