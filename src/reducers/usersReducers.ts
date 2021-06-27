import { ISingleUser } from '../entities/users';
import { ISinglePhoto } from '../entities/photos';
import { ISinglePost } from '../entities/posts';
import { ISingleComment } from '../entities/comments';
import * as actionTypes from '../actions/actionTypes/userTypes';

export interface IUsersReducer{
    usersList: ISingleUser[];
    usersPhoto: ISinglePhoto[];
    usersPost: ISinglePost[];
    usersComment: ISingleComment[];
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    usersPhoto: [],
    usersPost: [],
    usersComment: [],
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_USERS: {
            const data: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: data.usersList
            }
        }

        case actionTypes.GET_PHOTOS: {
            const data: actionTypes.IUserTypes['GET_PHOTOS'] = action;
            return {
                ...state,
                usersPhoto: data.usersPhoto
            }
        }

        case actionTypes.GET_POSTS: {
            const data: actionTypes.IUserTypes['GET_POSTS'] = action;
            return {
                ...state,
                usersPost: data.usersPost
            }
        }

        case actionTypes.GET_COMMENTS: {
            const data: actionTypes.IUserTypes['GET_COMMENTS'] = action;
            return {
                ...state,
                usersComment: data.usersComment
            }
        }
     
        default: {
            return state
        }
    }
}