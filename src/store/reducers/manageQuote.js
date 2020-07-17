import * as actionTypes from "../actions";

export default function manageQuote(state = {
    quote: "I am in the process of becoming the best version of myself.",
}, action) {
    switch(action.type) {
        case actionTypes.ADD_QUOTE:
            console.log("ADD")
            return {
                ...state,
                quote: action.quote,
            }
            
        default:
            return state;
    }
}