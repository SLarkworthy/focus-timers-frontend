import React, { Component } from "react";
import { connect } from "react-redux";
import Activity from './Activity';
import { getActivityTimers, deleteActivity } from "../../store/actions/timerActions";
import TestTimer from '../timer/TestTimer';
import ActivityInput from './ActivityInput';
import UpdateActivity from './UpdateActivity';
import generalClasses from '../../App.module.css';


class ActivityContainer extends Component {

    renderTimerNames = () => {
        return [...this.props.userTimers].sort( (b, a) => a.id - b.id ).map(timer => (
            <div className={generalClasses.Card} key={timer.id}>
                <h3>{timer.activity}</h3>
                <p>Work Time <strong>{`${timer.work_time_hours}:${timer.work_time_minutes}`}</strong> Break Time <strong>{`${timer.break_time_hours}:${timer.break_time_minutes}`}</strong></p>
                <Activity timer={timer} />
                <UpdateActivity timer={timer} />
                <div>
                    <button onClick={() => this.props.deleteActivity(timer, this.props.currentUser)}>Delete</button>
                </div>
            </div>
        ))
    }


    render() {
        console.log(this.props.userTimers)
        return (
            <div>
                <div className={generalClasses.Card}>
                    <h2>Activity Timers</h2>
                </div>
                <div className={generalClasses.Card}> 
                    <ActivityInput />
                </div>
                {this.renderTimerNames()}
                <div className={generalClasses.Card}>
                    Test Timer :
                    <TestTimer />   
                </div>           
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        loggedIn: state.manageUsers.loggedIn,
        currentUser: state.manageUsers.currentUser,
        userTimers: state.manageTimers.userTimers
    }
}

export default connect(mapStateToProps, { getActivityTimers, deleteActivity })(ActivityContainer)