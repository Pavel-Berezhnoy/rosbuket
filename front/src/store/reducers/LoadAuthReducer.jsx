import { token } from "../../services/tokenService";

const defState = {
  isLoading: false,
  auth: false,
  errors: null,
  user:{}
};

const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const AUTH_GETUSER = 'AUTH_GETUSER';

export { LOADING, SUCCESS, ERROR, AUTH_GETUSER };

export default function loadAuthReducer(state = defState, action) {
  switch (action.type){
    case LOADING:
      return {...state, isLoading: true}
    case SUCCESS:
      token.saveToken(action.payload.access_token);
      return {...state, isLoading: false, user: action.payload.user, auth: true}
    case AUTH_GETUSER:
      return {...state, isLoading: false, user: action.payload, auth: true}
    case ERROR: 
      return {...state, isLoading: false, errors: action.payload.error}
    default:
      return state
  }
}