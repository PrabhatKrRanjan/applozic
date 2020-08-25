export const ADD_USER_DATA = 'ADD_USER_DATA';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const addUserData = (payload) => ({
    type : ADD_USER_DATA,
    payload
})

export const changePage = (payload) => ({
    type : CHANGE_PAGE,
    payload
})
