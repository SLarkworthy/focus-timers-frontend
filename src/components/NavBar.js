import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { logoutUser } from '../store/actions/userActions'

const navBar = (props) => {
    const handleClick = () => {
        if (props.loggedIn) {
            props.logoutUser();
        }
    }

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        Log In
                    </Link>
                </li>
                <li>
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={() => handleClick()}>
                        Log Out
                    </Link>
                </li>
            </ul>
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