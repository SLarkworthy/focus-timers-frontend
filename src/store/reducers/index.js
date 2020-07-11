import { combineReducers } from 'redux';
import manageUsers from './manageUsers';
import manageTimers from './manageTimers';

export default combineReducers({
    manageUsers,
    manageTimers
})