import React from 'react';
import TimerState from '../timer/TimerState'
import classes from './ActivityContainer.module.css';


const activity = ({timer}) => {
    return (
        <>
            <h3>{timer.activity}</h3>
            <p>Work Time <strong>{`${timer.work_time_hours}:${timer.work_time_minutes}`}</strong> Break Time <strong>{`${timer.break_time_hours}:${timer.break_time_minutes}`}</strong></p>
            <div className={classes.Timer}>
                <TimerState timer={timer}/>
            </div>
        </>
    )
}

export default activity;