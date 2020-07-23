import * as actionTypes from "../actions";

export function loginUser(user) {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({user: user})
        })
            .then(resp => resp.json())
            .then(userData => {
                if (userData.user){
                    dispatch({ type: actionTypes.LOGIN, user: userData.user.data.attributes })
                    for (let timer of userData.user.data.attributes.activity_timers ) {
                        dispatch({ type: actionTypes.ADD_TIMER, timer: timer })
                    }
                }
            } )
    }
}

export function signupUser(user) {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({user: user})
        })
            .then(resp => resp.json())
            .then(userData => {
                if (userData.user) {
                    dispatch({ type: actionTypes.SIGNUP, user: userData.user.data.attributes })
                }
            } )
    }
}

export function logoutUser() {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/logout`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: "include"
        })
            .then(resp => {
                if (resp.ok) {
                    dispatch({ type: actionTypes.LOGOUT })
                    dispatch({ type: actionTypes.DELETED_TIMERS })
                }
            })
    }
}

export function sessionStatus() {
    return dispatch => {
        dispatch({ type: actionTypes.LOADING_SESSION_STATUS });
        fetch("http://localhost:3001/api/v1/logged_in", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            credentials: "include"
        })
            .then(resp => resp.json())
            .then(userData => {
                if (userData.logged_in) {
                    dispatch({ type: actionTypes.LOGIN, user: userData.user.data.attributes })
                    for (let timer of userData.user.data.attributes.activity_timers ) {
                        dispatch({ type: actionTypes.ADD_TIMER, timer: timer })
                    }
                } else {
                    dispatch({ type: actionTypes.LOGOUT })
                    dispatch({ type: actionTypes.DELETED_TIMERS })
                }
            })
            .catch(error => console.log(error))
    }
}