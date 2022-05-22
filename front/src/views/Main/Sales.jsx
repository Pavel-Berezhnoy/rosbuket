import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from './responsive';
import Card from './Card';
import BouquetCardLoader from "../../components/loaders/BouquetCardLoader";
import { useSelector } from "react-redux";

export default function Sales() {
    const mainData = useSelector(state => state.mainReducer.mainCards);
    return (
        <div className="sales">
            <h2 className="sales__title">Сейчас по скидке</h2>
            <div className="content__cards">
                <Carousel
                    swipeable={true}
                    draggable={false}
                    responsive={responsive}
                    centerMode={true}
                    ssr={true}
                    infinite={false}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={['mobile', 'tablet', 'bigMobile']}
                    dotListClass="custom-dot-list-style"
                >
                    {mainData.sales.length
                        ? mainData.sales.map((bouquet) => {
                            return <Card key={bouquet.id} bouquet={bouquet} />;
                        })
                        : [1,2,3,4].map(item => <BouquetCardLoader key={item} />)}
                </Carousel>
            </div>
        </div>
    );
}