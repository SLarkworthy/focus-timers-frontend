import React from "react";
import classes from './Homepage.module.css'

const homepage = props => {
    return (
        <>
        {/* <img src={image}></img> */}
        <div className={classes.Homepage}>
            <h1>Welcome to Focus Buddy!</h1>
            <p>This app is designed to let you create custom timed work and break cycles for any activity. </p>
            {props.loggedIn ? <p>Head to your activities page to get started</p> : <p>Log in or Sign up, add an activity, and start a timer cycle!</p>}
            <p>Random affirmation: <em>{props.quote}</em></p>
        </div>
        </>
    )
}

export default homepage;
