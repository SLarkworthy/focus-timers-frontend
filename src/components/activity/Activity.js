import React from 'react';
import TimerState from '../timer/TimerState'



const activity = (props) => {
    return (
        <TimerState timer={props.timer}/>
    )
}

export default activity;