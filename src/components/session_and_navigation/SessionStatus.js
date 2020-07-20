import React, { Component } from "react"
import { connect } from "react-redux"
import { sessionStatus } from "../../store/actions/userActions"
import { getActivityTimers } from "../../store/actions/timerActions";
import classes from './SessionStatus.module.css'
import Routes from './Routes'
import image from '../../assets/sunset.jpg'

class SessionStatus extends Component {

    componentDidMount() {
        this.props.sessionStatus()
    }

    render() {
        return (
            <div className={classes.SessionStatus}>
                <img src={image} alt="background sunset"></img>
                <Routes loggedIn={this.props.loggedIn}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        loggedIn: state.manageUsers.loggedIn,
        currentUser: state.manageUsers.currentUser,
    }
}

export default connect(mapStateToProps, { sessionStatus, getActivityTimers })(SessionStatus)