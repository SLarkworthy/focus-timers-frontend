import React, { Component } from 'react';
import { connect } from "react-redux";
import classes from './Errors.module.css';
import * as actionTypes from '../../store/actions';

class Errors extends Component {
    errorLogic() {
        if (this.props.errors.length !== 0) {
            return (
                <ul 
                    className={classes.Errors}
                    onClick={this.handleClick}>
                    {this.props.errors.map((error, index) => {
                        return <li key={index}>{error}</li>
                    })}
                </ul>
            )
        } else {
            return null;
        }
    }

    handleClick = () => {
        this.props.clearErrors();
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        return this.errorLogic()
    }
}

const mapStateToProps = state => {
    return {
        errors: state.manageErrors.errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
      clearErrors: () => dispatch({ type: actionTypes.CLEAR_ERRORS })
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Errors);