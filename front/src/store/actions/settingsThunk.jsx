import { settingsLoading, settingsSuccess, settingsError } from "../reducers/SettingsReducer";

const settingsThunk = (request) => {
    return async (dispatch) => {
        try {
            dispatch(settingsLoading());
            const response = await request();
            if (response.status === 200) {
                dispatch(settingsSuccess(response.data));
            } else {
                const result = response.data;
                dispatch(settingsError(result.message));
            }
        } catch (err) {
            dispatch(settingsError(err));
        }
    }
}

export default settingsThunk;