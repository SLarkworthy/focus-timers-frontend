import React, { Component } from "react";
import { connect } from "react-redux";
import Activity from './Activity';
import { deleteActivity } from "../../store/actions/timerActions";
import ActivityInput from './ActivityInput';
import UpdateActivity from './UpdateActivity';
import generalClasses from '../../App.module.css';
import classes from './ActivityContainer.module.css';
import Errors from '../errors/Errors';

class ActivityContainer extends Component {

    state = {
        clicked: false
    }

    renderTimerNames = () => {
        const sortedArray = () => {
            if (!this.state.clicked){
                return [...this.props.userTimers].sort( (b, a) => a.id - b.id )
            } else {
                return [...this.props.userTimers].sort( (a, b) => {
                    let aName = a.activity.toUpperCase();
                    let bName = b.activity.toUpperCase();
                    if (aName < bName) {
                        return -1;
                    } else if (aName > bName) {
                        return 1;
                    } else return 0;
                })
            }
        }
     
        return sortedArray().map(timer => (
            <div className={generalClasses.Card} key={timer.id}>
                <Activity timer={timer} />
                <UpdateActivity timer={timer} />
                <div className={classes.Delete}>
                    <button onClick={() => window.confirm("Are you sure you wish to delete this item?") && this.props.deleteActivity(timer, this.props.currentUser)}>Delete</button>
                </div>
            </div>
        )) 
    }

    handleClick = () => {
        this.setState({clicked: true});
    }


    render() {
        return (
            <div>
                <Errors />
                <div className={generalClasses.Card}>
                    <h2>Activity Timers</h2>
                    <button onClick={this.handleClick}>Sort By Name!</button>
                </div>
                <div className={generalClasses.Card}> 
                    <ActivityInput />
                </div>
                {this.renderTimerNames()}
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

export default connect(mapStateToProps, { deleteActivity })(ActivityContainer)