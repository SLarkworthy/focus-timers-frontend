import React, { Component } from "react";
import { connect } from "react-redux";
import Activity from './Activity';
import { getActivityTimers } from "../store/actions/timerActions";
import TestTimer from './TestTimer';
import ActivityInput from './ActivityInput';
import UpdateActivity from './UpdateActivity';


class ActivityContainer extends Component {

    componentDidMount() {
        
    }

    renderTimerNames = () => {
        return this.props.userTimers.map(timer => (
            <li key={timer.id}>
                {timer.activity}
                <Activity timer={timer} />
                <UpdateActivity timer={timer} />
            </li>
        ))
    }


    render() {
        console.log(this.props.userTimers)
        return (
            <div>
                <h2>Activity List</h2>
                <ActivityInput />
                <ul>
                    {this.renderTimerNames()}
                </ul>
                Test Timer :
                <TestTimer />
               
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

export default connect(mapStateToProps, { getActivityTimers })(ActivityContainer)