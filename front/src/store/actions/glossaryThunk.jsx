import { api } from "../../api/api.get";
import { glossaryError, glossaryFlowerSuccess, glossaryLoading, glossarySuccess } from "../reducers/GlossaryReducer";

const glossaryThunk = (pageAddress) => {
  return async (dispatch) => {
    try {
      dispatch(glossaryLoading());
      const response = await api.get(pageAddress);
      if (response.status === 200) {
        dispatch(glossarySuccess(response.data));
      } else {
        dispatch(glossaryError(response.message));
      }
    } catch (err) {
      dispatch(glossaryError(err.response.data));
    }
  }
}

const glossaryFlowerThunk = (pageAddress) => {
  return async (dispatch) => {
    try {
      dispatch(glossaryLoading());
      const response = await api.get(pageAddress);
      console.log(response);
      if (response.status === 200) {
        dispatch(glossaryFlowerSuccess(response.data));
      } else {
        dispatch(glossaryError(response.message));
      }
    } catch (err) {
      dispatch(glossaryError(err.response.data));
    }
  }
}

export { glossaryThunk, glossaryFlowerThunk };