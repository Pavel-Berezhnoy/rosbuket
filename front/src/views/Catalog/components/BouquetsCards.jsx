import React from "react";
import BouquetCard from "./BouquetCard";
import { api } from "../../../api/api.get";
import { GET_BOUQETS } from "../../../store/reducers/MainReducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BouquetsCards = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const priceFilter = useSelector(state => state.mainReducer.filters.price);
  React.useEffect(() => {
    (async () => {
      const catalogBouquetsApi = await api.get(`/api/category/${id}?price_filter=${priceFilter.value}`);
      dispatch({
        type: GET_BOUQETS,
        payload: catalogBouquetsApi.data,
      });
    })();
  },[id,priceFilter,dispatch]);
  const bouquetList = useSelector(state => state.mainReducer.bouquets) || [];
  return (
    <div className="bouquets_cards">
      {bouquetList.length > 0 ? bouquetList.map((val) => {
        return <BouquetCard key={val.id} price={val.price} desc={val.short_description} discount={val.discount} id={val.id} title={val.name} image={val.image} />
      }) : <h2 className="font-bold text-3xl text-center w-full">В этой категории товары пока отсутствуют!</h2>}
    </div>
  );
}

export default BouquetsCards;