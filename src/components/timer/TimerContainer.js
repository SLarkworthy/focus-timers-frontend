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
            return {border: "2px solid red"} 
        } else {
            return{border: "2px solid blue"}
        }
    }

    startCycle = start => {
        start();
    }

    resetCycle = (reset, pause) => {
        if (this.props.workMode) {
            reset();
            pause();
        } else {
            this.props.changeMode();
            reset();
            pause();
        }
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
            onStart={() => console.log('onStart hook')}
            onStop={() => console.log('onStop hook')}
            checkpoints={[
                {
                    time: 999,
                    callback:  this.handleCallback
                }
            ]}
        >
            {({ start, resume, pause, reset }) => (
            <>
            <div className={classes.Buttons}>
                <button onClick={() => this.startCycle(start)}>Start Cycle</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                <button onClick={() => this.resetCycle(reset, pause)}>Reset Cycle</button>
                {this.props.workMode ? <button onClick={() => this.skipToBreak(reset, pause)}>Skip to Break</button> : null}
            </div>
            <div className={classes.Box} style={this.timerStyle()}>
                <Timer.Hours />:<Timer.Minutes />:<Timer.Seconds />
            </div>
            <br />
            </>
            )}
        </Timer>
    )
}}

export default TimerContainer;