import React from "react";
import { Link } from 'react-router-dom';
import CardReview from "../../components/cardReviews/CardReview";
import PriceView from "../../components/discount/DiscountView";
import config from "../../config/main";

function Card(props) {
    const bouquet = props.bouquet;
    return (
        <Link className="flex h-full max-w-[300px] w-full" key={bouquet.id} to={`/bouquet/${bouquet.id}`}>
            <div className="w-full flex flex-col text-black hover:shadow-xl transition-all m-2 p-6 rounded-lg">
                <img className="w-full object-contain object-center rounded h-80 mb-4" src={config.domain + bouquet.image} alt="" />
                <h2 className="text-2xl flex-auto font-medium title-font mb-2">{bouquet.name}</h2>
                <p className="leading-relaxed flex-auto text-lg">{bouquet.short_description}</p>
                <div className="text-center mt-2 leading-none flex justify-between w-full">
                    <div className="flex flex-col">
                        <PriceView price={bouquet.price} discount={bouquet.discount} />
                    </div>
                    <div className="flex items-center">
                        <CardReview ratingValue={bouquet.rating} />
                        <span className="pl-2">{bouquet.countRating}</span>
                    </div>

                </div>
            </div>
        </Link>

    );
}

export default Card;