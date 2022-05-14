
import { BOUQUET_LOADING, BOUQUET_SUCCESS, BOUQUET_ERROR } from "../reducers/BouquetReducer";
import { api } from "../../api/api.get";

const bouquetThunk = (pageAddress) => {
  return async (dispatch) => {
    try {
      dispatch(bouquetLoading());
      const response = await api.get(pageAddress);
      if (response.status === 200) {
        dispatch(bouquetSuccess(response.data));
      } else {
        dispatch(bouquetFailure(response.message));
      }
    } catch (err) {
      dispatch(bouquetFailure(err.response.data));
    }
  }
}

const bouquetSuccess = (bouquet) => ({
  type: BOUQUET_SUCCESS,
  payload: bouquet
});

const bouquetLoading = () => ({
  type: BOUQUET_LOADING
});

const bouquetFailure = (error) => ({
  type: BOUQUET_ERROR,
  payload: {
    error
  }
});

export default bouquetThunk;