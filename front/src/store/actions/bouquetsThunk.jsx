import { api } from "../../api/api.get";
import { bouquetsLoading, bouquetsSuccess, bouquetsFailure } from "../reducers/MainReducer";

const bouquetsThunk = (address) => {
    return async (dispatch) => {
        try {
            dispatch(bouquetsLoading());
            const response = await api.get(address);
            if (response.status === 200) {
                dispatch(bouquetsSuccess(response.data));
            } else {
                dispatch(bouquetsFailure(response.message));
            }
        } catch (err) {
            dispatch(bouquetsFailure(err.response.data));
        }
    }
}

export default bouquetsThunk;