import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { logoutUser } from '../store/actions/userActions'
import classes from './NavBar.module.css'

const navBar = (props) => {
    const handleClick = () => {
        if (props.loggedIn) {
            props.logoutUser();
        }
    }

    return (
        <div className={classes.NavBar}>
            <Link to="/">
                Home
            </Link>
            <Link to="/login">
                Log In
            </Link>
            <Link to="/signup">
                Sign Up
            </Link>
            <Link to={`/users/${props.currentUser.id}`} >
                User page
            </Link>
            <Link to="/" onClick={() => handleClick()}>
                Log Out
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { logoutUser })(navBar)