import React, { Component } from "react";
import TimerContainer from './TimerContainer'

class TimerState extends Component {
    state = {
        workMode: true
    }

    handleModeChange = () => {
        this.setState(prevState => ({workMode: !prevState.workMode}));
    }

    timeToMiliseconds = () => {
        if (this.props.practiceMode) {
            return 20 * 1000 + 999
        }
        if (this.state.workMode) {
            return 60 * 60 * 1000 * this.props.timer.work_time_hours + 60 * 1000 * this.props.timer.work_time_minutes + 999
        } else {
            return 60 * 60 * 1000 * this.props.timer.break_time_hours + 60 * 1000 * this.props.timer.break_time_minutes + 999  
        }
    }

    render() {
        return (
            <TimerContainer 
                timeToMiliseconds={this.timeToMiliseconds()}
                workMode={this.state.workMode}
                changeMode={this.handleModeChange} />
        );
    }
}

export default TimerState