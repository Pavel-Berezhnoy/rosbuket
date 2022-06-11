const initialState = {
  open: false,
  messages: [],
  type: '',
}

const MESSAGE_SET_SUCCESS_MESSAGES = 'MESSAGE_SET_SUCCESS_MESSAGES';
const MESSAGE_SET_ERROR_MESSAGES = 'MESSAGE_SET_ERROR_MESSAGES';
const MESSAGE_SET_CLOSE = 'MESSAGE_SET_CLOSE';

const messageSetSuccessMessages = messages => ({
  type: MESSAGE_SET_SUCCESS_MESSAGES,
  payload: messages
});

const messageSetErrorMessages = messages => ({
  type: MESSAGE_SET_ERROR_MESSAGES,
  payload: messages
});

const messageSetClose = () => ({
  type: MESSAGE_SET_CLOSE
});

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_SET_SUCCESS_MESSAGES:
      return { ...state, messages: action.payload, open: true, type: 'success' };
    case MESSAGE_SET_ERROR_MESSAGES:
      return { ...state, messages: action.payload, open: true, type: 'error' };
    case MESSAGE_SET_CLOSE:
      return { ...state, type: '', messages: [], open: false };
    default:
      return state;
  }
}

export { messageSetClose, messageSetErrorMessages, messageSetSuccessMessages };
