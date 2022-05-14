const initialState = {
  bouquets: [],
  filters: {
    price: {
      value: 'asc',
      label: "По возрастанию"
    },
    popular: false,
  },
  isLoading: false,
  errors: null
}

const SET_PRICE_FILTR = "SET_PRICE_FILTR";
const BOUQUETS_LOADING = 'BOUQUETS_LOADING';
const BOUQUETS_SUCCESS = 'BOUQUETS_SUCCESS';
const BOUQUETS_ERROR = 'BOUQUETS_ERROR';

const bouquetsSuccess = (bouquets) => ({
  type: BOUQUETS_SUCCESS,
  payload: bouquets,
});

const bouquetsFailure = (error) => ({
  type: BOUQUETS_ERROR,
  payload: {
    error
  }
});

const bouquetsLoading = () => ({
  type: BOUQUETS_LOADING
});

const bouquetsFilter = (filter) => ({
  type: SET_PRICE_FILTR,
  payload: filter
});


const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOUQUETS_SUCCESS:
      return { ...state, bouquets: action.payload, errors: null, isLoading: false };
    case BOUQUETS_LOADING:
      return { ...state, isLoading: true };
    case BOUQUETS_ERROR:
      return { ...state, isLoading: false, bouquets: [], errors: action.payload.error };
    case SET_PRICE_FILTR:
      return { ...state, filters: { ...state.filters, price: action.payload } }
    default:
      return state
  }
}

export { bouquetsSuccess, bouquetsFailure, bouquetsLoading, bouquetsFilter };

export default mainReducer;