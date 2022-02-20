
import { BOUQUETS_LOADING, BOUQUETS_SUCCESS, BOUQUETS_ERROR } from "../reducers/BouquetReducer";
import { api } from "../../api/api.get";

const bouquetThunk = (pageAddress) => {
  return async (dispatch) => {
    try {
      dispatch(bouquetLoading());
      const response = await api.get(pageAddress);
      if (response.status === 200) {
        dispatch(bouquetSuccess(response.data));
      } else {
        const result = response;
        dispatch(bouquetFailure(result.message));
      }
    } catch (err) {
      dispatch(bouquetFailure(err));
    }
  }
}

const bouquetSuccess = (bouquet) => ({
  type: BOUQUETS_SUCCESS,
  payload: bouquet
});

const bouquetLoading = () => ({
  type: BOUQUETS_LOADING
});

const bouquetFailure = (error) => ({
  type: BOUQUETS_ERROR,
  payload: {
    error: error
  }
});

export default bouquetThunk;