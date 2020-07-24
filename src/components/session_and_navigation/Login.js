import React, { Component } from 'react';
import { connect } from "react-redux"
import { loginUser } from '../../store/actions/userActions';
import generalClasses from '../../App.module.css';
import Errors from '../errors/Errors';

class Login extends Component {
    state = {
        userData: {
            email: '',
            password: '',
        }, 
        loggedIn: this.props.loggedIn
    }

    componentDidUpdate() {
        if (this.props.loggedIn) {
            this.props.history.push('/')
        }
    }
        
    handleChange = (e) => {
        this.setState({
            ...this.state,
            userData: {
                ...this.state.userData,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.loginUser(this.state.userData)
        .then(() => {
            if (this.props.loggedIn) {
                this.props.history.push(`/activities`)
            }
        }) 
        this.setState({ 
            userData: {
                email: '',
                password: '',
            }, 
            loggedIn: this.props.loggedIn
        })
    }

    render() {
        return (
            <div className={generalClasses.Card}>
                <h1>Log in</h1>
                <Errors />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="email" value={this.state.userData.email} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="password" value={this.state.userData.password} onChange={this.handleChange} />
                    <input type="submit" value="Log In" />
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


export default connect(mapStateToProps, { loginUser })(Login)