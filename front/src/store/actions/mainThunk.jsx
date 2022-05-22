import { api } from "../../api/api.get";
import { bouqetMainCards, bouquetsLoading, bouquetsFailure } from "../reducers/MainReducer";


const mainThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(bouquetsLoading());
      const response = await api.get('/api/main');
      if (response.status === 200) {
        dispatch(bouqetMainCards(response.data));
      } else {
        dispatch(bouquetsFailure(response.message));
      }
    } catch (err) {
      dispatch(bouquetsFailure(err.response.data));
    }
  }
}

export default mainThunk;