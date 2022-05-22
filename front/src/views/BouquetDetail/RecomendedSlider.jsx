import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from './RecomendedResponsive';
import { api } from "../../api/api.get";
import config from "../../config/main";
import { Link } from "react-router-dom";
import BouquetCardLoader from "../../components/loaders/BouquetCardLoader";
import CardReview from "../../components/cardReviews/CardReview";

const RecomendedSlider = () => {
    const [recomended, setRecomended] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await api.get(`/api/category/3`);
            setRecomended(response.data)
        })();
    }, []);
    return (
        <>
            <div className="p-4 bg-gray-100"><h1 className="ml-2 font-bold text-2xl uppercase">Посмотрите также</h1></div>
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
                    dotListClass="custom-dot-list-style"
                >
                    {recomended.length
                        ? recomended.map((recomend) => {
                            return (
                                <Link className="flex h-full" key={recomend.id} to={`/bouquet/${recomend.id}`}>
                                    <div className="border w-full flex flex-col border-gray-700 text-black border-solid m-2 p-6 rounded-lg">
                                        <img className="w-full object-cover object-center rounded h-80 mb-4" src={config.domain + recomend.image} alt="" />
                                        <h2 className="text-lg flex-auto font-medium title-font mb-2">{recomend.name}</h2>
                                        <p className="leading-relaxed flex-auto text-base">{recomend.short_description}</p>
                                        <div className="text-center mt-2 leading-none flex justify-between w-full">
                                            <div className="flex flex-col">
                                                {recomend.discount > 0 ?
                                                    <span className="whitespace-nowrap inline-flex font-bold items-center leading-none text-xl py-1">
                                                        {recomend.price - recomend.discount} руб.\шт.
                                                    </span>
                                                    : ``}
                                                <span className="whitespace-nowrap inline-flex items-center leading-none text-lg py-1">
                                                    {recomend.discount > 0 ?
                                                        <del className="text-red-300">{recomend.price} руб.\шт.</del>
                                                        :
                                                        `${recomend.price} руб.\\шт.`}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                <CardReview ratingValue={recomend.rating} />
                                                <span className="pl-2">{recomend.countRating}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>);
                        })
                        : [1, 2, 3, 4].map(item => <BouquetCardLoader key={item} />)}
                </Carousel>
            </div>
        </>
    );
}

export default RecomendedSlider;