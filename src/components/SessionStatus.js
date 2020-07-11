import React, { Component } from "react"
import { connect } from "react-redux"
import { sessionStatus } from "../store/actions/userActions"
import classes from './SessionStatus.module.css'

class SessionStatus extends Component {

    componentDidMount() {
        this.props.sessionStatus()
    }

    render() {
        return (
            <div className={classes.SessionStatus}>
                <h2>Welcome {this.props.loggedIn ? this.props.currentUser.name : "!"}</h2>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { sessionStatus })(SessionStatus)