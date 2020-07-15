import React, { Component } from "react";
import { connect } from "react-redux";
import Homepage from './Homepage'
import { getQuote } from '../../store/actions/quoteActions'


class HomepageContainer extends Component {

    componentDidMount() {
        this.props.getQuote();
    }

    render() {
        return (
            <div>
                <Homepage 
                    loggedIn={this.props.loggedIn}
                    currentUser={this.props.currentUser}
                    quote={this.props.quote[this.props.quote.length - 1]}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        loggedIn: state.manageUsers.loggedIn,
        currentUser: state.manageUsers.currentUser,
        userTimers: state.manageTimers.userTimers,
        quote: state.manageQuote.quote
    }
}

export default connect(mapStateToProps, { getQuote })(HomepageContainer)