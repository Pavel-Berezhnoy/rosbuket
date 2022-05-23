import { api } from "../../api/api.get";
import { cartSuccess, cartLoading, cartFailure } from "../reducers/CartReducer";

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

export default cartThunk;