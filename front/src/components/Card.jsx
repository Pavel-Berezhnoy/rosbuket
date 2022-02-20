import React from "react";
import { Link } from 'react-router-dom';
import config from "./../config/main";

function Card(props) {
    const bouquet = props.bouquet;
    return (
        <Link className="flex h-full max-w-[300px] w-full" key={bouquet.id} to={`/bouquet/${bouquet.id}`}>
            <div className="w-full flex flex-col text-black hover:shadow-xl transition-all m-2 p-6 rounded-lg">
                <img className="w-full object-contain object-center rounded h-80 mb-4" src={config.domain + bouquet.image} alt="" />
                <h2 className="text-2xl flex-auto font-medium title-font mb-2">{bouquet.name}</h2>
                <p className="leading-relaxed flex-auto text-lg">{bouquet.short_description}</p>
                <div
                    className="text-center mt-2 leading-none flex flex-col justify-between w-full">
                    {bouquet.discount > 0 ?
                        <span className="whitespace-nowrap inline-flex font-bold items-center leading-none text-xl py-1">
                            {bouquet.price - bouquet.discount} руб.\шт.
                        </span>
                        : ``}
                    <span className="whitespace-nowrap inline-flex items-center leading-none text-lg py-1">
                        {bouquet.discount > 0 ?
                            <del className="text-red-300">{bouquet.price} руб.\шт.</del>
                            :
                            `${bouquet.price} руб.\\шт.`}
                    </span>
                </div>
            </div>
        </Link>

    );
}

export default Card;