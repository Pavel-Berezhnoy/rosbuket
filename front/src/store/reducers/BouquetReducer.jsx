const initialState = {
  isLoading: false,
  bouquet: {},
  errors: null,
};

const BOUQUETS_LOADING = 'BOUQUETS_LOADING';
const BOUQUETS_SUCCESS = 'BOUQUETS_SUCCESS';
const BOUQUETS_ERROR = 'BOUQUETS_ERROR';

export { BOUQUETS_LOADING, BOUQUETS_SUCCESS, BOUQUETS_ERROR };

export default function bouquetReducer(state = initialState, action) {
  switch (action.type){
    case BOUQUETS_LOADING:
      return {...state, isLoading: true}
    case BOUQUETS_SUCCESS: 
      return {...state, isLoading: false, bouquet: action.payload}
    case BOUQUETS_ERROR: 
      return {...state, isLoading: false, errors: action.payload.error}
    default:
      return state
  }
}