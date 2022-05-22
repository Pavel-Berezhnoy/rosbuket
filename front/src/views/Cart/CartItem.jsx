import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import config from "../../config/main";
import { cartUpdateItem, cartDeleteItem } from "../../store/reducers/CartReducer";
import cartStore from "./cart-store";

const CartItem = ({ item }) => {
    const [qty, setQty] = useState(item.quantity);
    const dispatch = useDispatch();
    const updateQtyHandler = () => {
        cartStore.updateItem(item.id, qty);
        dispatch(cartUpdateItem(item.id, qty));
    }
    const deleteItemHandler = () => {
        cartStore.deleteItem(item.id);
        dispatch(cartDeleteItem(item.id))
    }
    return (
        <tr>
            <td className="hidden pb-4 md:table-cell">
                <Link to={`/bouquet/${item.id}`}>
                    <img src={config.domain + item.image} className="w-20 rounded" alt="Thumbnail" />
                </Link>
            </td>
            <td>
                <Link to={`/bouquet/${item.id}`}>
                    <p className="mb-2 md:ml-4">{item.name}</p>
                </Link>
                <button onClick={deleteItemHandler} type="submit" className="text-red-700 md:ml-4">
                    <small>Удалить</small>
                </button>
            </td>
            <td className="justify-center md:justify-end md:flex mt-6">
                <div className="w-20 h-10">
                    <div className="relative flex flex-row w-full h-8">
                        <input type="number" value={qty} onBlur={updateQtyHandler} onChange={event => event.target.value >= 0 ? setQty(event.target.value) : setQty(0)}
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                    </div>
                </div>
            </td>
            <td className="hidden text-right md:table-cell">
                <span className="text-sm lg:text-base font-medium">
                    {item.price - (item.discount || 0)}₽
                </span>
            </td>
            <td className="text-right">
                <span className="text-sm lg:text-base font-medium">
                    {(item.price - (item.discount || 0))  * item.quantity}₽
                </span>
            </td>
        </tr>
    );
}

export default CartItem;