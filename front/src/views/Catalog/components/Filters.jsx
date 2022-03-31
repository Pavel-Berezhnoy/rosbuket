import React from "react";
import PriceFilter from "./PriceFilter";

const Filters = () => {
  return (
    <div className="w-full p-8 my-8 border border-slate-300 rounded border-solid">
      <h2 className="text-2xl">Фильтры</h2>
      <PriceFilter/>
    </div>
  );
}

export default Filters;