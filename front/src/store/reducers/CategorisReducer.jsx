const defState = {
  categories: [],
  errors: null,
  isLoading: false,
}

const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
const CATEGORIES_FAILURE = 'CATEGORIES_FAILURE';
const CATEGORIES_LOADING = 'CATEGORIES_LOADING';

const categoriesSuccess = (categories) => ({
  type: CATEGORIES_SUCCESS,
  payload: categories
});

const categoriesFailure = (errors) => ({
  type: CATEGORIES_FAILURE,
  payload: { errors }
});

const categoriesLoading = () => ({
  type: CATEGORIES_LOADING,
})

const categoryReducer = (state = defState, action) => {
  switch (action.type) {
    case CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload, isLoading: false, errors: null };
    case CATEGORIES_FAILURE:
      return { ...state, errors: action.payload.errors, isLoading: false, categories: [] };
    case CATEGORIES_LOADING:
      return { ...state, isLoading: true };
    default:
      return state
  }
}

export { categoriesSuccess, categoriesFailure, categoriesLoading };

export default categoryReducer;