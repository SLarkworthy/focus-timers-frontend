import React, { Component } from 'react';
import { connect } from "react-redux"
import * as actionTypes from "../store/actions";
import { signupUser } from '../store/actions/userActions'

class Signup extends Component {
    state = {
        name: '',
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
        this.props.signupUser(this.state)
        this.setState({
            name: '',
            email: '',
            password: '',
        })
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}


export default connect(null, { signupUser })(Signup)