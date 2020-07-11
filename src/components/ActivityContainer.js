import React, { Component } from "react"
import { connect } from "react-redux"
import Activity from './Activity'


class ActivityContainer extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                I am the activity container
                <Activity />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        loggedIn: state.manageUsers.loggedIn,
        currentUser: state.manageUsers.currentUser
    }
}

export default connect(mapStateToProps)(ActivityContainer)