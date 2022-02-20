import Cookies from "js-cookie";
import { cartSuccess, cartLoading, cartFailure } from "../reducers/CartReducer";

const bouquetsThunk = () => {
    return async (dispatch) => {
        try {
            dispatch(cartLoading());
            const response = await fetch(`http://rosbackend/api/cart`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: Cookies.get('cart'),
            });
            if (response.ok) {
                dispatch(cartSuccess(await response));
            } else {
                const result = await response;
                dispatch(cartFailure(result.message));
            }
        } catch (err) {
            dispatch(cartFailure(err));
        }
    }
}

export default bouquetsThunk;