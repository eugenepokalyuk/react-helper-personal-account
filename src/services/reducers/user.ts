import {
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
} from "../actions/user";

const initialState: any = {
    user: [],
    loading: false,
    error: null,
};

export const selectLoading = (state: any) => state.user.loading;
export const selectError = (state: any) => state.user.error;

export const userReducer = (
    state = initialState,
    action: any
) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                stat: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};