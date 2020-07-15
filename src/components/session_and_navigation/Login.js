import React, { Component } from 'react';
import { connect } from "react-redux"
import * as actionTypes from "../../store/actions";
import { loginUser } from '../../store/actions/userActions'

class Login extends Component {
    state = {
        email: '',
        password: '',
    }
        
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.loginUser(this.state)
        .then(() => {
            if (this.props.loggedIn) {
                this.props.history.push(`/users/${this.props.currentUser.id}`)
            }
        }) 
        this.setState({ 
            email: '',
            password: '',
        })
    }

    render() {
        return (
            <div>
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
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