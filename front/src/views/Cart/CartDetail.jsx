import React from 'react';
import { useSelector } from 'react-redux';

const CartDetail = () => {
    const cart = useSelector(state => state.cartReducer.cart) || [];
    const qtyCartItems = cart.reduce((accumulator, cartItem) => accumulator + Number(cartItem.qty), 0);
    const priceCartItem = cart.reduce((accumulator, cartItem) => accumulator + Number(cartItem.price) * Number(cartItem.qty), 0);
    return (
        <>
            <div className="lg:px-2">
                <div className="p-4 bg-gray-100">
                    <h1 className="ml-2 font-bold uppercase">Детали заказа</h1>
                </div>
                <div className="p-4">
                    <div className="flex justify-between pt-4 border-b">
                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                            <span>Кол-во товаров</span>
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                            <span>{qtyCartItems}</span>
                        </div>
                    </div>
                    <div className="flex justify-between pt-4 border-b">
                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                            <span>Цена</span>
                        </div>
                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                            <span>{priceCartItem}₽</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartDetail;