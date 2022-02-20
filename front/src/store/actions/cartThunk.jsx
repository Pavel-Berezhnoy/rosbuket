import Cookies from "js-cookie";
import { api } from "../../api/api.get";
import { cartSuccess, cartLoading, cartFailure } from "../reducers/CartReducer";

const cartThunk = () => {
    return async (dispatch) => {
        const items = Cookies.get('cart');
        try {
            dispatch(cartLoading());
            const response = await api.get(`http://rosbackend/api/cart?items=${await JSON.parse(items).map(item => item.id).join(",")}`);
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