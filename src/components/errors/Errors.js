import React from 'react';
import { connect } from "react-redux";
import classes from './Errors.module.css';

const errors = (props) => {
    function errorLogic() {
        if (props.errors.length !== 0) {
            return (
                <ul className={classes.Errors}>
                    {props.errors.map((error, index) => {
                        return <li key={index}>{error}</li>
                    })}
                </ul>
            )
        } else {
            return null;
        }
    }

    return (
        errorLogic()
    )
}

const mapStateToProps = state => {
    return {
        errors: state.manageErrors.errors
    }
}

export default connect(mapStateToProps, null)(errors);