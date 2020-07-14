import React, { Component } from 'react';
import { connect } from "react-redux"
import * as actionTypes from "../store/actions";
import { postActivity } from '../store/actions/timerActions'

class Login extends Component {
    state = {
        activity: '',
        work_time_minutes: 0,
        work_time_hours: 0,
        break_time_minutes: 0,
        break_time_hours: 0,
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
            work_time_minutes: 0,
            work_time_hours: 0,
            break_time_minutes: 0,
            break_time_hours: 0,
            sound: 'ring'
        })
    }

    render() {
        return (
            <div>
                <h1>Add Activity Timer</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="activity" placeholder="activity name" value={this.state.activity} onChange={this.handleChange} />
                    <label>Work Time</label>
                    <input type="number" name="work_time_hours" value={this.state.work_time_hours} onChange={this.handleChange} /> hour(s)
                    <input type="number" name="work_time_minutes" value={this.state.work_time_minutes} onChange={this.handleChange} /> minute(s)
                    <label>Break Time</label>
                    <input type="number" name="break_time_hours" value={this.state.break_time_hours} onChange={this.handleChange} /> hour(s)
                    <input type="number" name="break_time_minutes" value={this.state.break_time_minutes} onChange={this.handleChange} /> minute(s)
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