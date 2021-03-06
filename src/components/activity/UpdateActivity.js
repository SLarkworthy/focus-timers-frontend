import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateActivity } from '../../store/actions/timerActions';
import classes from './ActivityInput.module.css';


class Login extends Component {

    state = {
        timer: {
            id: this.props.timer.id,
            activity: this.props.timer.activity,
            work_time_hours: this.props.timer.work_time_hours,
            work_time_minutes: this.props.timer.work_time_minutes,
            break_time_hours: this.props.timer.break_time_hours,
            break_time_minutes: this.props.timer.break_time_minutes,
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
        const { timer } = this.state
        return (
            <>
            <button onClick={this.toggleForm} className={classes.ToggleButton}>{this.buttonName()}</button>
            <div className={this.formClass()}>
                <h3>Update Activity Timer</h3>
                <form className={classes.Form} onSubmit={this.handleSubmit}>
                    <input type="text" name="activity" placeholder="activity name" value={timer.activity} onChange={this.handleChange} />
                    <label>Work Time</label>
                    <div>
                        <input type="number" name="work_time_hours" value={timer.work_time_hours} onChange={this.handleChange} /><strong> : </strong> 
                        <input type="number" name="work_time_minutes" value={timer.work_time_minutes} max="59" onChange={this.handleChange} />
                    </div>
                    <label>Break Time</label>
                    <div>
                        <input type="number" name="break_time_hours" value={timer.break_time_hours} onChange={this.handleChange} /><strong> : </strong> 
                        <input type="number" name="break_time_minutes" value={timer.break_time_minutes} max="59" onChange={this.handleChange} />
                    </div>
                    <input type="submit" value="Update Activity" />
                </form>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.manageUsers.currentUser,
    }
}


export default connect(mapStateToProps, { updateActivity })(Login)