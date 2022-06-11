import { messageSetSuccessMessages } from "../reducers/MessageReducer";
import { settingsLoading, settingsSuccess, settingsError } from "../reducers/SettingsReducer";

const settingsThunk = (request, successMessage) => {
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
            if (response.config.method !== 'get')
                dispatch(messageSetSuccessMessages(successMessage || []))
        } catch (err) {
            dispatch(settingsError(err));
        }
    }
}

export default settingsThunk;