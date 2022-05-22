const initialState = {
  isLoading: false,
  bouquets: [],
  errors: null,
};

const ADMIN_BOUQUETS_LOADING = 'ADMIN_BOUQUETS_LOADING';
const ADMIN_BOUQUETS_SUCCESS = 'ADMIN_BOUQUETS_SUCCESS';
const ADMIN_BOUQUETS_ERROR = 'ADMIN_BOUQUETS_ERROR';

const adminBouquetsSuccess = (bouquets) => ({
  type: ADMIN_BOUQUETS_SUCCESS,
  payload: bouquets
});

const adminBouquetsError = (error) => ({
  type: ADMIN_BOUQUETS_ERROR,
  payload: {
    error
  }
});

const adminBouquetsLoading = () => ({
  type: ADMIN_BOUQUETS_LOADING
});

export { adminBouquetsLoading, adminBouquetsError, adminBouquetsSuccess };

export default function adminBouquetsReducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_BOUQUETS_LOADING:
      return { ...state, isLoading: true }
    case ADMIN_BOUQUETS_SUCCESS:
      return { ...state, isLoading: false, bouquets: [...state.flowers, action.payload], errors: null }
    case ADMIN_BOUQUETS_ERROR:
      return { ...state, isLoading: false, errors: action.payload.error }
    default:
      return state;
  }
}