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
               console.log(timerData.data);
            } )
    }
}


export function postActivity(timer, user) {
    return dispatch => {
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
                }
            })
    }
}


// export function loginUser(user) {
//     return dispatch => {
//         return fetch("http://localhost:3001/api/v1/login", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             },
//             credentials: "include",
//             body: JSON.stringify({user: user})
//         })
//             .then(resp => resp.json())
//             .then(userData => {
//                 if (userData.user){
//                     dispatch({ type: actionTypes.LOGIN, user: userData.user.data.attributes })
//                 }
//             } )
//     }
// }


// export function loginUser(user) {
//     return dispatch => {
//         return fetch("http://localhost:3001/api/v1/login", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//             },
//             credentials: "include",
//             body: JSON.stringify({user: user})
//         })
//             .then(resp => resp.json())
//             .then(userData => {
//                 if (userData.user){
//                     dispatch({ type: actionTypes.LOGIN, user: userData.user.data.attributes })
//                 }
//             } )
//     }
// }
