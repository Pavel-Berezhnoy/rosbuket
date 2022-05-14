import { api } from "../../api/api.get";
import { categoriesSuccess, categoriesFailure, categoriesLoading } from "../reducers/CategorisReducer";

const categoriesThunk = (address) => {
  return async (dispatch) => {
    try {
      dispatch(categoriesLoading());
      const response = await api.get(address);
      if (response.status === 200) {
        dispatch(categoriesSuccess(response.data));
      } else {
        dispatch(categoriesFailure(response.message));
      }
    } catch (err) {
      dispatch(categoriesFailure(err.response.data));
    }
  }
}

export default categoriesThunk;