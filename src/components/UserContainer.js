import React, { Component } from "react"
import { connect } from "react-redux"
import { sessionStatus } from "../store/actions/userActions"
import User from './User'



class SessionStatus extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <User />
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

export default connect(mapStateToProps)(SessionStatus)