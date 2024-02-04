import {
    FETCH_SKILLS_FAILURE,
    FETCH_SKILLS_REQUEST,
    FETCH_SKILLS_SUCCESS,
    RESET_SELECTED_SKILL,
    SET_SELECTED_SKILL,
} from "../actions/skills";

const initialState: any = {
    skills: [],
    selectedSkill: null,
    loading: false,
    error: null,
};

export const selectLoading = (state: any) => state.skills.loading;
export const selectError = (state: any) => state.skills.error;

export const skillsReducer = (
    state = initialState,
    action: any
) => {
    switch (action.type) {
        case FETCH_SKILLS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_SKILLS_SUCCESS:
            return {
                ...state,
                skills: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_SKILLS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SET_SELECTED_SKILL:
            return {
                ...state,
                selectedSkill: action.payload,
            };
        case RESET_SELECTED_SKILL:
            return {
                ...state,
                selectedSkill: null,
            };
        default:
            return state;
    }
};