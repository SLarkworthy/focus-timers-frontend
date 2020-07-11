import React, { Component } from "react"
import { connect } from "react-redux"
import { sessionStatus } from "../store/actions/userActions"

class SessionStatus extends Component {

    componentDidMount() {
        this.props.sessionStatus()
    }

    render() {
        return (
            <div>
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