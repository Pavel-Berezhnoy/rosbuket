const initialState = {
  isLoading: false,
  reviews: [],
  errors: null,
};

const ADMIN_REVIEWS_LOADING = 'ADMIN_REVIEWS_LOADING';
const ADMIN_REVIEWS_SUCCESS = 'ADMIN_REVIEWS_SUCCESS';
const ADMIN_REVIEWS_ERROR = 'ADMIN_REVIEWS_ERROR';
const ADMIN_DELETE_REVIEW = 'ADMIN_DELETE_REVIEW';

const adminReviewsSuccess = (bouquets) => ({
  type: ADMIN_REVIEWS_SUCCESS,
  payload: bouquets
});

const adminReviewsError = (error) => ({
  type: ADMIN_REVIEWS_ERROR,
  payload: {
    error
  }
});

const adminReviewsLoading = () => ({
  type: ADMIN_REVIEWS_LOADING
});

const deleteReview = (id) => ({
  type: ADMIN_DELETE_REVIEW,
  payload: {
    id
  }
})

export { adminReviewsLoading, adminReviewsError, adminReviewsSuccess, deleteReview };

export default function adminReviewsReducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_REVIEWS_LOADING:
      return { ...state, isLoading: true }
    case ADMIN_REVIEWS_SUCCESS:
      return { ...state, isLoading: false, reviews: [...action.payload], errors: null }
    case ADMIN_REVIEWS_ERROR:
      return { ...state, isLoading: false, errors: action.payload.error }
    case ADMIN_DELETE_REVIEW:
      return { ...state, reviews: state.reviews.filter(review => review.id !== action.payload.id) }
    default:
      return state;
  }
}