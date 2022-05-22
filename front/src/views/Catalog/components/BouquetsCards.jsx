import React from "react";
import BouquetCard from "./BouquetCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import bouquetsThunk from "../../../store/actions/bouquetsThunk";
import BouquetCardLoader from "../../../components/loaders/BouquetCardLoader";

const BouquetsCards = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const priceFilter = useSelector(state => state.mainReducer.filters.price);
  React.useEffect(() => {
    dispatch(bouquetsThunk(`/api/category/${id}?price_filter=${priceFilter.value}`));
  }, [id, priceFilter, dispatch]);
  const bouquetData = useSelector(state => state.mainReducer);
  return (
    <div className="bouquets_cards">
      {!bouquetData.isLoading
        ? (bouquetData.bouquets.length
          ? bouquetData.bouquets.map((val) => {
            return <BouquetCard rating={val.rating} countRating={val.countRating} key={val.id} price={val.price} desc={val.short_description} discount={val.discount} id={val.id} title={val.name} image={val.image} />
          })
          : <h2 className="font-bold text-3xl text-center w-full">В этой категории товары пока отсутствуют!</h2>)
        : [1, 2, 3, 4].map(item => <BouquetCardLoader key={item} />)}
    </div>
  );
}

export default BouquetsCards;