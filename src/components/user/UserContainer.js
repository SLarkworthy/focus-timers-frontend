import React from "react";
import { connect } from "react-redux";
import User from './User';
import generalClasses from '../../App.module.css';



const userContainer = ({ params, currentUser }) => {

    const pageContent = () => {
        if (parseInt(params.id) === currentUser.id) {
            return <User currentUser={currentUser}/>;
        } else {
            return "unauthorized";
        }
    }  
    
    return (
        <div className={generalClasses.Card}>
            {pageContent()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.manageUsers.loggedIn,
        currentUser: state.manageUsers.currentUser
    }
}

export default connect(mapStateToProps)(userContainer)