import { api } from "../../api/api.get";
import { adminReviewsLoading, adminReviewsSuccess, adminReviewsError } from "../reducers/AdminReviewsReducer";

const adminReviewsThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(adminReviewsLoading());
      const response = await api.get(`api/admin/review`);
      if (response.status === 200) {
        dispatch(adminReviewsSuccess(response.data));
      } else {
        dispatch(adminReviewsError(response.message));
      }
    } catch (err) {
      dispatch(adminReviewsError(err.response));
    }
  }
}

export { adminReviewsThunk };