import React from 'react';
import Timer from 'react-compound-timer';
import sound from '../../assets/alarm_sound.mp3';
import Modal from '../UI/Modal';
import TimerModal  from './TimerModal';

class TimerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userTimerWork = React.createRef();

        this.state = {
            showEdit: false,
            workMode: true
        }
      }

    handleWorkCallback = () => {
        this.userTimerWork.current.pause();
        let audio = new Audio(sound);
        audio.play();
    }

    handleBreakCallback = () => {
        this.userTimerWork.current.reset();
        let audio = new Audio(sound);
        audio.play();
    }

    setStartTime = () => {
        //dont forget!! break time plus work time!!
        return 60 * 60 * 1000 * this.props.timer.work_time_hours + 60 * 1000 * this.props.timer.work_time_minutes + 60 * 60 * 1000 * this.props.timer.break_time_hours + 60 * 1000 * this.props.timer.break_time_minutes;
    }

    setBreakTime = () => {
        return 60 * 60 * 1000 * this.props.timer.break_time_hours + 60 * 1000 * this.props.timer.break_time_minutes;
    }
    

    render() {
    return (
        <>
        <Modal>
            <TimerModal 
                workMode={this.state.workMode}/>
        </Modal>
        <Timer
            ref={this.userTimerWork}
            initialTime={this.setStartTime()}
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
            <div>
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
        <Timer
            ref={this.userTimerBreak}
            initialTime={this.setStartTime()}
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
            <div>
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
        </>
    )
}}

export default TimerContainer;