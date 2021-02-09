import {
    LoadUsersRequest,
    LoadUsersSuccess,
    LoadUsersError } from './types';



export const loadUsersRequest = (): LoadUsersRequest => ({
    type: 'loadUsersRequest',
});


export const loadUsersSuccess = (users: []): LoadUsersSuccess => ({  type: 'loadUsersSuccess',  users,
});

export const loadUsersError = (): LoadUsersError => ({
    type: 'loadUsersError',
});