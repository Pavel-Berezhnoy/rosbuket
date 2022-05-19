const initialState = {
  isLoading: false,
  reviews: {}, 
  errors: null,
};

const REVIEW_LOADING = 'REVIEW_LOADING';
const REViEW_SUCCESS = 'REViEW_SUCCESS';
const REViEW_ERROR = 'REViEW_ERROR';

const reviewtSuccess = (reviews) => ({
  type: REViEW_SUCCESS,
  payload: reviews
});

const reviewLoading = () => ({
  type: REVIEW_LOADING
});

const reviewFailure = (error) => ({
  type: REViEW_ERROR,
  payload: {
    error: error
  }
});

export { reviewtSuccess, reviewLoading, reviewFailure };

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case REVIEW_LOADING:
      return { ...state, isLoading: true }
    case REViEW_SUCCESS:
      return { ...state, isLoading: false, reviews: action.payload, errors: null }
    case REViEW_ERROR:
      return { ...state, isLoading: false, errors: action.payload.error }
    default:
      return state;
  }
}