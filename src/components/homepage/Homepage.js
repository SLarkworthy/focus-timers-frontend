import React from "react";
import generalClasses from '../../../src/App.module.css';
import classses from '../activity/ActivityContainer.module.css'
import TimerState from '../timer/TimerState'


const homepage = props => {
    return (
        <>
        <div className={generalClasses.Card}>
            <h1>Welcome to Focus Buddy!</h1>
            <p>This app is designed to let you create custom timed work and break cycles for any activity. </p>
            {props.loggedIn ? <p>Head to your activities page to get started</p> : <p>Log in or Sign up, add an activity, and start a timer cycle!</p>}
            <br />
            <p style={{color: "purple"}}>Random affirmation: <em>{props.quote}</em></p>
        </div>
        <div className={generalClasses.Card}>
            <h2>Here is an example timer!</h2>
            <p>This example timer works in cycles of 20 seconds of work, 20 seconds of break. Make an account to customize your own!</p>
            <div className={classses.Timer}>
                <TimerState practiceMode={true} />
            </div>
        </div>
        </>
    )
}

export default homepage;
