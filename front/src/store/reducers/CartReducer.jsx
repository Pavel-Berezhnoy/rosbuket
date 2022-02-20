import Cookies from "js-cookie";

const initialState = {
  isLoading: false,
  cart: [],
  errors: null,
};

const CART_LOADING = 'CART_LOADING';
const CART_SUCCESS = 'CART_SUCCESS';
const CART_ERROR = 'CART_ERROR';
const CART_UPDATE_ITEM = "CART_UPDATE_ITEM";
const CART_DELETE_ITEM = "CART_DELETE_ITEM";
const CART_CLEAR = "CART_CLEAR";

const cartSuccess = (cart) => ({
  type: CART_SUCCESS,
  payload: cart
});

const cartLoading = () => ({
  type: CART_LOADING
});

const cartFailure = (error) => ({
  type: CART_ERROR,
  payload: {
    error: error
  }
});

const cartUpdateItem = (idItem, qtyItem) => ({
  type: CART_UPDATE_ITEM,
  payload: {
    idItem,
    qtyItem
  }
});

const cartDeleteItem = (idItem) => ({
  type: CART_DELETE_ITEM,
  payload: {
    idItem
  }
})

const cartClear = () => ({
  type: CART_CLEAR,
})

export { CART_LOADING, CART_SUCCESS, CART_ERROR, cartSuccess, cartLoading, cartFailure, cartUpdateItem, cartClear, cartDeleteItem };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_LOADING:
      return { ...state, isLoading: true }
    case CART_SUCCESS:
      const arrayCartItems = [];
      const cookiesCart = JSON.parse(Cookies.get('cart'));
      for (let item in cookiesCart) {
        arrayCartItems.push({ ...action.payload[cookiesCart[item].id], qty: cookiesCart[item].quantity });
      }
      return { ...state, isLoading: false, cart: arrayCartItems }
    case CART_ERROR:
      return { ...state, isLoading: false, errors: action.payload.error }
    case CART_UPDATE_ITEM:
      return { ...state, cart: state.cart.map(item => item.id != action.payload.idItem ? item : { ...item, qty: action.payload.qtyItem }) }
    case CART_DELETE_ITEM:
      return { ...state, cart: state.cart.filter(item => item.id != action.payload.idItem) }
    case CART_CLEAR:
      Cookies.remove('cart');
      return {...initialState}
    default:
      return state
  }
}