import { api } from "../../api/api.get";
import { reviewFailure, reviewLoading, reviewtSuccess } from "../reducers/ReviewReducer";


const reviewThunk = (pageAddress) => {
  return async (dispatch) => {
    try {
      dispatch(reviewLoading());
      const response = await api.get(pageAddress);
      if (response.status === 200) {
        dispatch(reviewtSuccess(response.data));
      } else {
        dispatch(reviewFailure(response.message));
      }
    } catch (err) {
      dispatch(reviewFailure(err.response.data));
    }
  }
}

export default reviewThunk;