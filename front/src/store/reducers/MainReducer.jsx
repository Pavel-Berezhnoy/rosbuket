const initialState = {
  bouquets: [],
  filters: {
    price: {
      value: 'asc',
      label: "По возрастанию" 
    },
    popular: false,
  }
}

const GET_BOUQETS = "GET_BOUQETS";
const SET_PRICE_FILTR = "SET_PRICE_FILTR";


const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOUQETS:
      return { ...state, bouquets: action.payload };
    case SET_PRICE_FILTR:
      return {...state, filters:{...state.filters, price: action.payload}}
    default:
      return state
  }
}

export { GET_BOUQETS, SET_PRICE_FILTR };

export default mainReducer;