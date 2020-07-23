import { combineReducers } from 'redux';
import manageUsers from './manageUsers';
import manageTimers from './manageTimers';
import manageQuote from './manageQuote'
import manageErrors from './manageErrors'

export default combineReducers({
    manageUsers,
    manageTimers,
    manageQuote,
    manageErrors
})