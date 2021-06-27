import {Dispatch} from 'redux';
import * as actionTypes from '../actions/actionTypes/userTypes';
import { ISingleUser } from '../entities/users';
import { ISinglePhoto } from '../entities/photos';
import { ISinglePost } from '../entities/posts';
import { ISingleComment } from '../entities/comments';

export const getUsers = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((usersList: ISingleUser[]) => {
        dispatch({
            type: actionTypes.GET_USERS,
            usersList
        })
    })
}) as any;

export const getPhotos = (): Promise<ISinglePhoto[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then((usersPhoto: ISinglePhoto[]) => {
        dispatch({
            type: actionTypes.GET_PHOTOS,
            usersPhoto
        })
    })
}) as any;

export const getPosts = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((usersPost: ISinglePost[]) => {
        dispatch({
            type: actionTypes.GET_POSTS,
            usersPost
        })
    })
}) as any;

export const getComments = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then((usersComment: ISingleComment[]) =>{
        dispatch({
            type: actionTypes.GET_COMMENTS,
            usersComment
        })
    })

}) as any;

