import { combineReducers } from 'redux';

import users, { IUsersReducer } from './usersReducers';

export default combineReducers({
    users,
})

export interface IState {
    users: IUsersReducer,
}