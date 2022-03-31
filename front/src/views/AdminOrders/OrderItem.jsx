import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../config/main';

const OrderItem = ({ item }) => {
    return (
        <tr>
            <td className="hidden pb-4 md:table-cell">
                <Link to={`/bouquet/${item.bouquet.id}`}>
                    <img src={config.domain + item.bouquet?.image} className="w-20 rounded" alt="Thumbnail" />
                </Link>
            </td>
            <td>
                <Link to={`/bouquet/${item.bouquet.id}`}>
                    <p className="mb-2 md:ml-4">{item.bouquet?.name}</p>
                </Link>
            </td>
            <td className="justify-center md:justify-end md:flex mt-6">
                <div className="w-20 h-10">
                    <div className="relative flex flex-row w-full h-8">
                        <span
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" >
                            {item.qty}
                        </span>
                    </div>
                </div>
            </td>
            <td className="hidden text-right md:table-cell">
                <span className="text-sm lg:text-base font-medium">
                    {item.bouquet.price}₽
                </span>
            </td>
            <td className="text-right">
                <span className="text-sm lg:text-base font-medium">
                    {item.bouquet.price * item.qty}₽
                </span>
            </td>
        </tr>
    )
}

export default OrderItem;