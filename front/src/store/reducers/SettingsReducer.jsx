const initialState = {
    isLoading: false,
    settings: [],
    errors: null,
};

const SETTINGS_LOADING = 'SETTINGS_LOADING';
const SETTINGS_SUCCESS = 'SETTINGS_SUCCESS';
const SETTINGS_ERROR = 'SETTINGS_ERROR';

const settingsLoading = () => {
    return {
        type: SETTINGS_LOADING
    }
}

const settingsSuccess = (payload) => {
    return {
        type: SETTINGS_SUCCESS,
        payload: payload
    }
}

const settingsError = (payload) => {
    return {
        type: SETTINGS_ERROR,
        payload: {
            errors: payload
        }
    }
}

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case SETTINGS_LOADING:
            return { ...state, isLoading: true };
        case SETTINGS_SUCCESS:
            return { ...state, isLoading: false, settings: action.payload };
        case SETTINGS_ERROR:
            return { ...state, isLoading: false, errors: action.payload.error };
        default: 
            return state;
    }
}

export { settingsError, settingsSuccess, settingsLoading }