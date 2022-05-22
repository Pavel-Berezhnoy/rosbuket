import React from 'react';
import { useSelector } from 'react-redux';
import BouquetCard from '../Catalog/components/BouquetCard';

const News = () => {
    const mainData = useSelector(state => state.mainReducer.mainCards);
    return (
        <>
            <h2 className="popular__title">Новинки</h2>
            <div className="bouquets_cards mt-16">
                {mainData.news.length ? mainData.news.map((newBouquet) => {
                    return <BouquetCard
                        key={newBouquet.id}
                        rating={newBouquet.rating}
                        countRating={newBouquet.countRating}
                        price={newBouquet.price}
                        desc={newBouquet.short_description}
                        discount={newBouquet.discount}
                        id={newBouquet.id}
                        title={newBouquet.name}
                        image={newBouquet.image} />
                }) : <h2 className="font-bold text-3xl text-center w-full">Новинок пока нет!</h2>}
            </div>
        </>
    )
}

export default News;