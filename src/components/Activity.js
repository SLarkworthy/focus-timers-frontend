import React from 'react';
import TimerContainer from './TimerContainer'



const activity = (props) => {
    return (
        <div>
            <TimerContainer timer={props.timer}/>
        </div>
    )
}

export default activity;