import React, { Component } from 'react';
import { connect } from "react-redux";
import { signupUser } from '../../store/actions/userActions';
import generalClasses from '../../../src/App.module.css';


class Signup extends Component {
    state = {
        userData: {
            name: '',
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
        this.props.signupUser(this.state.userData)
        .then(() => {
            if (this.props.loggedIn) {
                this.props.history.push(`/activities`)
            }
        }) 
        this.setState({
            name: '',
            email: '',
            password: '',
        })
    }

    render() {
        return (
            <div className={generalClasses.Card}>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="name" value={this.state.userData.name} onChange={this.handleChange} />
                    <input type="text" name="email" placeholder="email" value={this.state.userData.email} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="password" value={this.state.userData.password} onChange={this.handleChange} />
                    <input type="submit" value="Sign Up" />
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


export default connect(mapStateToProps, { signupUser })(Signup)