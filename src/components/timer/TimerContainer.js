import React from 'react';
import Timer from 'react-compound-timer';
import sound from '../../assets/alarm_sound.mp3';
import classes from './TimerContainer.module.css'

class TimerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userTimer = React.createRef();
      }

    timerStyle = () => {
        if (this.props.workMode) {
            return {border: "3px solid rgb(252, 140, 43)", backgroundColor: "rgb(247, 202, 163)"} 
        } else {
            return {border: "3px solid rgb(52, 116, 179)", backgroundColor: "rgb(179, 217, 255)"}
        }
    }

    resetCycle = (reset, pause) => {
        if (!this.props.workMode) {
            this.props.changeMode();
        } 
        reset();
        pause();
        
    }

    skipToBreak = (reset, pause) => {
        if (this.props.workMode) {
            this.props.changeMode();
            reset();
            pause();
        } 
    }

    handleCallback = () => {
        this.props.changeMode();
        this.userTimer.current.reset();
        let audio = new Audio(sound);
        audio.play();
        this.userTimer.current.start();
    }

    render() {
    return (
        <Timer 
            key={this.props.timeToMiliseconds}
            formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
            ref={this.userTimer}
            initialTime={this.props.timeToMiliseconds}
            startImmediately={false}
            direction="backward"
            checkpoints={[
                {
                    time: 999,
                    callback:  this.handleCallback
                }
            ]}
        >
            {({ start, resume, pause, reset }) => (
            <div className={classes.Timer}>
                {this.props.workMode ? <span>work mode</span> : <span>break mode</span>}
             <div className={classes.Box} style={this.timerStyle()}>
                <Timer.Hours />:<Timer.Minutes />:<Timer.Seconds />
            </div>
            <div className={classes.Buttons}>
                <button onClick={start}>Start Cycle</button>
                <button onClick={() => this.resetCycle(reset, pause)}>Reset Cycle</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                {this.props.workMode ? <button onClick={() => this.skipToBreak(reset, pause)}>Skip to Break</button> : <button disabled>Skip to Break</button>}
            </div>
            <br />
            </div>
            )}
        </Timer>
    )
}}

export default TimerContainer;