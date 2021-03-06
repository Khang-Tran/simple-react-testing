import axios from 'axios';
import {FETCH_COMMENTS, SAVE_COMMENT} from './types';

export const saveComment = comment => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
};

export const fetchComments = () => {
    const comments = axios.get('https://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        payload: comments
    }
};