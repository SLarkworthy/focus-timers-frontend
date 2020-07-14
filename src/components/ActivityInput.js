import React, { Component } from 'react';
import { connect } from "react-redux"
import * as actionTypes from "../store/actions";
import { postActivity } from '../store/actions/timerActions'

class Login extends Component {
    state = {
        activity: '',
        work_time: '',
        break_time: '',
        sound: 'ring'
    }
        
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.postActivity(this.state, this.props.currentUser)
        this.setState({ 
            activity: '',
            work_time: '',
            break_time: '',
            sound: 'ring'
        })
    }

    render() {
        return (
            <div>
                <h1>Add Activity Timer</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="activity" placeholder="activity name" value={this.state.activity} onChange={this.handleChange} />
                    <input type="text" name="work_time" placeholder="Work time" value={this.state.work_time} onChange={this.handleChange} />
                    <input type="text" name="break_time" placeholder="Break time" value={this.state.break_time} onChange={this.handleChange} />
                    <input type="submit" value="Add Activity" />
                </form>
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


export default connect(mapStateToProps, { postActivity })(Login)