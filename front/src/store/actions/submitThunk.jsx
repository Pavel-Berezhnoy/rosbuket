import { messageSetErrorMessages, messageSetSuccessMessages } from "../reducers/MessageReducer";

const submitThunk = (request, successMessage) => {
  return async (dispatch) => {
    try {
      const response = await request();
      if (response.status === 200) {
        dispatch(messageSetSuccessMessages(successMessage));
      }
    } catch (err) {
      const messages = Object.entries(err.response.data.errors).map(error => error[1]);
      dispatch(messageSetErrorMessages(messages));
    }
  }
}

export { submitThunk };