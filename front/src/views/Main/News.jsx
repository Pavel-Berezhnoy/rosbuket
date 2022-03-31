import React from 'react';
import { useState, useEffect } from 'react';
import { api } from '../../api/api.get';
import BouquetCard from '../Catalog/components/BouquetCard';

const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await api.get(`/api?new=true`);
            setNews(response.data);
        })();
    }, []);
    return (
        <>
            <h2 className="popular__title">Новинки</h2>
            <div className="bouquets_cards mt-16">
                {news.length > 0 ? news.map((newBouquet) => {
                    return <BouquetCard
                        key={newBouquet.id}
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