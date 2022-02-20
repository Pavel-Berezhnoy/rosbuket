import React from "react";
import './../styles/card.css';
import { Link } from 'react-router-dom';
import config from "./../../../config/main";


function Card(props) {
  return (
      <div className="catalog__card">
        <Link to={`/category/${props.id}`}>
        <div className="catalog__card-content">
          <div className="catalog__card-image">
            <img src={config.domain + props.image} alt="" />
          </div>
          <h3 className="catalog__card-title">{props.title}</h3>
        </div>
        </Link>
      </div>
  );
}

export default Card;