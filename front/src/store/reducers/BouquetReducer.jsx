const initialState = {
  isLoading: false,
  bouquet: {}, 
  errors: null,
};

const BOUQUET_LOADING = 'BOUQUETS_LOADING';
const BOUQUET_SUCCESS = 'BOUQUETS_SUCCESS';
const BOUQUET_ERROR = 'BOUQUETS_ERROR';

export { BOUQUET_LOADING, BOUQUET_SUCCESS, BOUQUET_ERROR };

export default function bouquetReducer(state = initialState, action) {
  switch (action.type) {
    case BOUQUET_LOADING:
      return { ...state, isLoading: true }
    case BOUQUET_SUCCESS:
      return { ...state, isLoading: false, bouquet: action.payload, errors: null }
    case BOUQUET_ERROR:
      return { ...state, isLoading: false, errors: action.payload.error }
    default:
      return state
  }
}