import { LOADING, SUCCESS, ERROR, AUTH_GETUSER } from "../reducers/LoadAuthReducer";

const authThunk = (request) => {
  return async (dispatch) => {
    try {
      dispatch(authLoading());
      const response = await request();
      if (response.status === 200) {
        dispatch(authSuccess(response.data));
      } else {
        const result = await response;
        dispatch(authFailure(result.message));
      }
    } catch (err) {
      dispatch(authFailure(err));
    }
  }
}

export const authenticateThunk = request => {
  return async (dispatch) => {
    try {
      dispatch(authLoading());
      const response = await request();
      if (response.status === 200) {
        dispatch(authGetUser(response.data));
      } else {
        const result = await response;
        dispatch(authFailure(result.message));
      }
    } catch (err) {
      dispatch(authFailure(err));
    }
  }
}

export const authSuccess = (auth) => ({
  type: SUCCESS,
  payload: auth
});

export const authLoading = () => ({
  type: LOADING
});

const authGetUser = (auth) => ({
  type: AUTH_GETUSER,
  payload: auth
})

const authFailure = (error) => ({
  type: ERROR,
  payload: {
    error: error
  }
});

export default authThunk;