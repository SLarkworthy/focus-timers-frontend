import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { logoutUser } from '../../store/actions/userActions'
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
            {!props.loadingSession && !props.loggedIn ?
            <>
            <Link to="/login">
                Log In
            </Link>
            <Link to="/signup">
                Sign Up
            </Link> </> : null}
            {!props.loadingSession && props.loggedIn ?
            <>
            <Link to={`/users/${props.currentUser.id}`} >
                User page
            </Link>
            <Link to="/activities" >
                Activities
            </Link>
            <Link to="/" style={{float: "right", color: "black"}} onClick={() => handleClick()}>
                <strong>Log Out</strong>
            </Link> </> : null}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.manageUsers.loggedIn,
        currentUser: state.manageUsers.currentUser,
        loadingSession: state.manageUsers.loadingSession
    }
}

export default connect(mapStateToProps, { logoutUser })(navBar)