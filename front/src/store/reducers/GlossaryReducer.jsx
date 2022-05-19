const initialState = {
  isLoading: false,
  flowers: [],
  flower: null,
  errors: null,
  pages: 1,
};

const GLOSSARY_LOADING = 'GLOSSARY_LOADING';
const GLOSSARY_SUCCESS = 'GLOSSARY_SUCCESS';
const GLOSSARY_FLOWER_SUCCESS = 'GLOSSARY_FLOWER_SUCCESS';
const GLOSSARY_ERROR = 'GLOSSARY_ERROR';

const glossarySuccess = (flowers) => ({
  type: GLOSSARY_SUCCESS,
  payload: flowers
});

const glossaryError = (error) => ({
  type: GLOSSARY_ERROR,
  payload: {
    error
  }
});

const glossaryLoading = () => ({
  type: GLOSSARY_LOADING
});

const glossaryFlowerSuccess = (flower) => ({
  type: GLOSSARY_FLOWER_SUCCESS,
  payload: flower
});

export { glossarySuccess, glossaryError, glossaryLoading, glossaryFlowerSuccess };

export default function glossaryReducer(state = initialState, action) {
  switch (action.type) {
    case GLOSSARY_LOADING:
      return { ...state, isLoading: true }
    case GLOSSARY_FLOWER_SUCCESS:
      return { ...state, isLoading: false, flowers: [...state.flowers, action.payload], errors: null }
    case GLOSSARY_SUCCESS:
      return { ...state, isLoading: false, flowers: action.payload.data, pages: action.payload.last_page, errors: null }
    case GLOSSARY_ERROR:
      return { ...state, isLoading: false, errors: action.payload.error }
    default:
      return state;
  }
}