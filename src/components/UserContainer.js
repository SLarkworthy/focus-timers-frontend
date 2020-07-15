import React, { Component } from "react"
import { connect } from "react-redux"
import User from './User'
import ActivityContainer from './ActivityContainer'



class UserContainer extends Component {

    pageContent = () => {
        if (parseInt(this.props.params.id) === this.props.currentUser.id) {
            return <User />;
        } else {
            return "unauthorized";
        }
    }

    render() {
        return (
            <div>
                {this.pageContent()}
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