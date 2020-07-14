import React, { Component } from 'react';
import { connect } from "react-redux"
import * as actionTypes from "../store/actions";
import { updateActivity } from '../store/actions/timerActions'
import classes from './UpdateActivity.module.css'

class Login extends Component {
    state = {
        timer: {
            id: this.props.timer.id,
            activity: this.props.timer.activity,
            work_time: this.props.timer.work_time,
            break_time: this.props.timer.break_time,
            sound: 'ring',
        },

        showForm: false
    }
        
    handleChange = (e) => {
        this.setState({
            ...this.state,
            timer: {
                ...this.state.timer,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateActivity(this.state.timer, this.props.currentUser)
        this.setState({
            ...this.state,
            timer: {
                ...this.state.timer,
            },
            showForm: false
        })
    }

    toggleForm = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                showForm: !prevState.showForm
            }
        })
    }

    formClass = () => {
        if (this.state.showForm) {
            return null;
        } else {
            return classes.HideForm;
        }
    }

    buttonName = () => {
        if (this.state.showForm) {
            return "Hide Update Form";
        } else {
            return "Show Update Form";
        }
    }

    render() {
        console.log(this.state)
        return (
            <>
            <button onClick={this.toggleForm}>{this.buttonName()}</button>
            <div className={this.formClass()}>
                <h1>Update Activity Timer</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="activity" placeholder="activity name" value={this.state.timer.activity} onChange={this.handleChange} />
                    <input type="text" name="work_time" placeholder="Work time" value={this.state.timer.work_time} onChange={this.handleChange} />
                    <input type="text" name="break_time" placeholder="Break time" value={this.state.timer.break_time} onChange={this.handleChange} />
                    <input type="submit" value="Update Activity" />
                </form>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.manageUsers.loggedIn,
        currentUser: state.manageUsers.currentUser
    }
}


export default connect(mapStateToProps, { updateActivity })(Login)