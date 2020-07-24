import * as actionTypes from "../actions";

export function getActivityTimers(user) {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/users/${user.id}/activity_timers`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: "include"
        })
            .then(resp => resp.json())
            .then(timerData => {
                if (timerData.data) {
                    for (let timer of timerData.data) {
                        dispatch({ type: actionTypes.ADD_TIMER, timer: timer.attributes })
                    }
                }
            } )
    }
}

export function postActivity(timer, user) {
    return dispatch => {
        dispatch({ type: actionTypes.CLEAR_ERRORS })
        return fetch(`http://localhost:3001/api/v1/users/${user.id}/activity_timers`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({activity_timer: timer})
        })
            .then(resp => resp.json())
            .then(timerData => {
                if (timerData.data) {
                    dispatch({ type: actionTypes.ADD_TIMER, timer: timerData.data.attributes })
                } else if (timerData.errors) {
                    for (let error of timerData.errors) {
                        dispatch({ type: actionTypes.ADD_ERROR, error: error })
                    }
                }             
            })
            .catch(() => dispatch({ type: actionTypes.ADD_ERROR, error: "Server error" }))
    }
}

export function updateActivity(timer, user) {
    return dispatch => {
        dispatch({ type: actionTypes.CLEAR_ERRORS })
        return fetch(`http://localhost:3001/api/v1/users/${user.id}/activity_timers/${timer.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({activity_timer: timer})
        })
            .then(resp => resp.json())
            .then(timerData => {
                if (timerData.data) {
                    dispatch({ type: actionTypes.PATCH_TIMER, timer: timerData.data.attributes })
                } else if (timerData.errors) {
                    for (let error of timerData.errors) {
                        dispatch({ type: actionTypes.ADD_ERROR, error: error })
                    }
                }  
            })
            .catch(() => dispatch({ type: actionTypes.ADD_ERROR, error: "Server error" }))
    }
}

export function deleteActivity(timer, user) {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/users/${user.id}/activity_timers/${timer.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: "include",
        })
            .then(resp => {
                if (resp.ok) {
                    dispatch({ type: actionTypes.DELETE_TIMER, timer})
                }
            })
    }
}
