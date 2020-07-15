import React, { Component } from 'react';
import { connect } from "react-redux";
import { signupUser } from '../../store/actions/userActions';
import generalClasses from '../../../src/App.module.css';


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
        .then(() => {
            if (this.props.loggedIn) {
                this.props.history.push(`/users/${this.props.currentUser.id}`)
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
                    <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
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