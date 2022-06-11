import { api } from "../../api/api.get";
import { cartSuccess, cartLoading, cartFailure, cartClear } from "../reducers/CartReducer";
import { messageSetErrorMessages, messageSetSuccessMessages } from "../reducers/MessageReducer";

const cartThunk = (cart) => {
    return async (dispatch) => {
        cart = await cart();
        try {
            dispatch(cartLoading());
            const response = await api.get(`/api/cart?items[]=${cart.join("&items[]=")}`);
            if (response.status === 200) {
                dispatch(cartSuccess(response.data));
            } else {
                const result = response;
                dispatch(cartFailure(result.message));
            }
        } catch (err) {
            dispatch(cartFailure(err));
        }
    }
}

const cartSubmitThunk = (request, successMessage) => {
    return async (dispatch) => {
        try {
            const response = await request();
            if (response.status === 200) {
                dispatch(messageSetSuccessMessages(successMessage));
                dispatch(cartClear());
            }
        } catch (err) {
            const messages = Object.entries(err.response.data.errors).map(error => error[1]);
            dispatch(messageSetErrorMessages(messages));
        }
    }
}

export { cartSubmitThunk }

export default cartThunk;