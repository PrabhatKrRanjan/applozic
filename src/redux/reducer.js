import { CHANGE_PAGE, ADD_USER_DATA } from './action';

const initialState = {
    userInfo: [],
    total: '',
    page: 1,
    perPage: 4,
    apiPage: 1,
    apiTotalPage: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_DATA:
            console.log("ressss", action.payload)
            return {
                ...state,
                userInfo: [...state.userInfo, ...action.payload.data],
                total: action.payload.total,
                apiPage: action.payload.page,
                apiTotalPage: action.payload.total_pages
            }

        case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            }

        default:
            return state;
    }
}

export default reducer;