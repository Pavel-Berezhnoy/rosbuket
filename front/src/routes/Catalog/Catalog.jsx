import React from "react";
import './styles/catalog.css';
import BouquetsCards from "./components/BouquetsCards";
import CatalogCards from "./components/CatalogCards";
import Filters from "./components/Filters";

function Catalog() {
    return (
        <div className="catalog">
            <h2 className="about__title">Каталог</h2>
            <CatalogCards></CatalogCards>
            <Filters></Filters>
            <BouquetsCards></BouquetsCards>
        </div>
    );
}

export default Catalog;