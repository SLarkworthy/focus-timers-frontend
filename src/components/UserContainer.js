import React, { Component } from "react"
import { connect } from "react-redux"
import User from './User'
import ActivityContainer from './ActivityContainer'



class UserContainer extends Component {

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
        loggedIn: state.manageUsers.loggedIn,
        currentUser: state.manageUsers.currentUser
    }
}

export default connect(mapStateToProps)(UserContainer)