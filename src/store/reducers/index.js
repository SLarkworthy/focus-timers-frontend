import { combineReducers } from 'redux';
import manageUsers from './manageUsers';
import manageTimers from './manageTimers';
import manageQuote from './manageQuote'

export default combineReducers({
    manageUsers,
    manageTimers,
    manageQuote
})