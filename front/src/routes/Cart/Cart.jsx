import React from "react";
import { useSelector } from "react-redux";
import CartDetail from "./CartDetail";
import CartItems from "./Cartitems";
import OrderForm from "./OrderForm";

const Cart = () => {
    const cart = useSelector(state => state.cartReducer.cart.length) || 0;
    return (
        <div className="flex justify-center my-6">
            {cart > 0 ?
                <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                    <div className="flex-1">
                        <CartItems></CartItems>
                        <div className="my-4 mt-6 -mx-2">
                            <CartDetail></CartDetail>
                            <div className="lg:px-2">
                                <OrderForm></OrderForm>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="p-4 bg-gray-100">
                    <h1 className="ml-2 font-bold uppercase">Корзина пуста</h1>
                </div>}
        </div>
    );
}

export default Cart;