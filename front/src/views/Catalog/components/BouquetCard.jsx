import React from "react";
import './../styles/bouquetcard.css';
import { Link } from 'react-router-dom';
import config from "./../../../config/main";
import CardReview from "../../../components/cardReviews/CardReview";
import PriceView from "../../../components/discount/DiscountView";


function BouquetCard(props) {
  return (
    <div className="catalog__bouquet-card">
      <Link to={`/bouquet/${props.id}`}>
        <div className="catalog__bouquet-card-content">
          <div className="catalog__bouquet-card-image">
            <img src={config.domain + props.image} alt="" />
          </div>
          <div className="catalog__bouquet-card-description">
            <h3 className="catalog__bouquet-card-title">{props.title}</h3>
            <p className="mb-4">{props.desc}</p>
            <div className="flex w-full justify-between">
              <PriceView price={props.price} discount={props.discount} />
              <div className="flex items-center">
                <CardReview ratingValue={props.rating} />
                <span className="pl-2">{props.countRating}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BouquetCard;