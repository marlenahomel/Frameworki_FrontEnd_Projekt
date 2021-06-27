import { ISingleUser } from '../../entities/users';
import { ISinglePhoto } from '../../entities/photos';
import { ISinglePost } from '../../entities/posts';
import { ISingleComment } from '../../entities/comments';

export const GET_USERS = 'GET_USERS';
export const GET_PHOTOS = 'GET_PHOTOS';
export const GET_POSTS = 'GET_POSTS';
export const GET_COMMENTS = 'GET_COMMENTS';

export interface IUserTypes{
    GET_USERS: {
        usersList: ISingleUser[];
    };
    GET_PHOTOS: {
        usersPhoto: ISinglePhoto[];
    };
    GET_POSTS: {
        usersPost: ISinglePost[];
    };
    GET_COMMENTS: {
        usersComment: ISingleComment[];
    }
}