import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SingleFilter from "../../../components/filters/SingleFilter";
import { SET_PRICE_FILTR } from "../../../store/reducers/MainReducer";

const PriceFilter = () => {
  const dispatch = useDispatch();
  const handleFilter = (value) => {
    dispatch({type: SET_PRICE_FILTR, payload: value});
  }
  const priceFilter = useSelector(state => state.mainReducer.filters.price);

  const filterValues = [
    {
      value: "asc",
      label: "По возрастанию"
    },
    {
      value: "desc",
      label: "По Убыванию"
    },
  ]
  
  return (
    <div className="max-w-[300px]">
      <span className="text-xl pt-4 block">Цена: </span>
      <SingleFilter items={filterValues} activeItem={priceFilter} setActiveItem={handleFilter}></SingleFilter>
    </div>
  );
}

export default PriceFilter;