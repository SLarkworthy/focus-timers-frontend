import React from 'react';
import Timer from 'react-compound-timer';
import sound from '../assets/alarm_sound.mp3';


class TimerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userTimer = React.createRef();

        this.startTime = this.setStartTime();
        this.breakTime = this.setBreakTime();

        this.state = {
            showEdit: false
        }
      }

    handleWorkCallback = () => {
        this.userTimer.current.pause();
        let audio = new Audio(sound);
        audio.play();
    }

    handleBreakCallback = () => {
        this.userTimer.current.reset();
        let audio = new Audio(sound);
        audio.play();
    }

    setStartTime = () => {
        //dont forget!! break time plus work time!!
        return 20000;
    }

    setBreakTime = () => {
        return 10000;
    }
    

    render() {
    return (
        <>
        <div>timer</div>
        <Timer
            ref={this.userTimer}
            initialTime={this.startTime}
            startImmediately={false}
            direction="backward"
            onStart={() => console.log('onStart hook')}
            onStop={() => console.log('onStop hook')}
            checkpoints={[
                {
                    time: this.setBreakTime(),
                    callback: this.handleWorkCallback
                },
                {
                    time: 0,
                    callback:  this.handleBreakCallback
                }
            ]}
        >
            {({ start, resume, pause, reset }) => (
            <>
            <div  ref={this.myRef}>
                <Timer.Hours /> hours
                <Timer.Minutes /> minutes
                <Timer.Seconds /> seconds
            </div>
            <br />
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                <button onClick={reset}>Reset</button>
            </div>
            </>
            )}
        </Timer>
        <button>Edit</button>
        </>
    )
}}

export default TimerContainer;