import React from "react";
import './../styles/bouquetcard.css';
import { Link } from 'react-router-dom';
import config from "./../../../config/main";


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
            {props.discount > 0 ? <span className="whitespace-nowrap text-black inline-flex font-bold items-center leading-none text-xl py-1">{props.price - props.discount} руб.\шт.</span> : ``}
            <span className="catalog__bouquet-card-price mt-0">
              {props.discount > 0 ? <del className="text-red-300">{props.price} руб.\шт.</del> : `${props.price} руб.\\шт.`}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BouquetCard;