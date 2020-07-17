import * as actionTypes from "../actions";

export function getQuote() {
    return dispatch => {
        return fetch(`https://cors-anywhere.herokuapp.com/https://www.affirmations.dev`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then(resp => resp.json())
            .then(quote => {
                if (quote.affirmation) {
                    dispatch({ type: actionTypes.ADD_QUOTE, quote: quote.affirmation });
                }
            } )
            .catch(error => {
                console.log(error);
            })
    }
}