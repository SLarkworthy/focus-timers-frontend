import React, { Component } from "react";
import { connect } from "react-redux";
import Homepage from './Homepage'


class HomepageContainer extends Component {

    render() {
        return (
            <div>
                <Homepage 
                    loggedIn={this.props.loggedIn}
                    currentUser={this.props.currentUser}/>
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

export default connect(mapStateToProps)(HomepageContainer)