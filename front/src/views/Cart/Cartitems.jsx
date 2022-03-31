import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from "./CartItem";

const CartItems = () => {
    const cart = useSelector(state => state.cartReducer.cart) || [];
    return (
        <>
            <table className="w-full text-sm lg:text-base" cellSpacing="0">
                <thead>
                    <tr className="h-12 uppercase">
                        <th className="hidden md:table-cell"></th>
                        <th className="text-left">Название</th>
                        <th className="lg:text-right text-left pl-5 lg:pl-0">
                            <span className="lg:hidden" title="Quantity">Кол.</span>
                            <span className="hidden lg:inline">Количество</span>
                        </th>
                        <th className="hidden text-right md:table-cell">Цена за шт.</th>
                        <th className="text-right">Всего</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)}
                </tbody>
            </table>
        </>
    )
}

export default CartItems;