import React from 'react';
import Timer from 'react-compound-timer'

class TimerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userTimer = React.createRef(); 
      }

    handleCallback = () => {
        this.userTimer.current.pause()
    }

    render() {
    return (
        <>
        <div>timer</div>
        <Timer
            ref={this.userTimer}
            initialTime={10000}
            startImmediately={false}
            direction="backward"
            onStart={() => console.log('onStart hook')}
            onStop={() => console.log('onStop hook')}
            checkpoints={[
                {
                    time: 5000,
                    callback: this.handleCallback
                },
                {
                    time: 0,
                    callback: () => alert("done!")
                }
            ]}
        >
            {({ start, resume, pause, reset, getTime }) => (
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
        </>
    )
}}

export default TimerContainer;