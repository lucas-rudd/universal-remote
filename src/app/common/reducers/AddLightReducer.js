import { API_CALL_SUCCESS, API_CALL_REQUEST, API_CALL_FAILURE } from '../../config/ActionTypes';

const initialState = {
    fetching: false,
    internalipaddress: null,
    id: null,
    error: null,
};

export default function addLightReducer(state = initialState, action) {
    switch (action.type) {
        case API_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                internalipaddress: action.internalipaddress,
                id: action.id,
                error: null,
            };
        case API_CALL_FAILURE:
            return {
                ...state, fetching: false, error: action.error,
            };
        default:
            return state;
    }
}
