import React from 'react';
import TimerState from '../timer/TimerState'
import classes from './ActivityContainer.module.css';


const activity = (props) => {
    return (
        <>
            <h3>{props.timer.activity}</h3>
            <p>Work Time <strong>{`${props.timer.work_time_hours}:${props.timer.work_time_minutes}`}</strong> Break Time <strong>{`${props.timer.break_time_hours}:${props.timer.break_time_minutes}`}</strong></p>
            <div className={classes.Timer}>
                <TimerState timer={props.timer}/>
            </div>
        </>
    )
}

export default activity;