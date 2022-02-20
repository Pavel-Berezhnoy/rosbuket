import React, { useState, useEffect } from "react";
import { api } from '../../api/api.get';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from './responsive';
import Card from '../../components/Card';

export default function Popular(props) {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await api.get(`/api?popular=true`);
            setPopular(response.data);
        })();
    }, []);
    return (
        <div className="popular">
            <h2 className="popular__title">Популярные</h2>
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
                    {
                        popular.map((bouquet) => {
                            return <Card key={bouquet.id} bouquet={bouquet} />;
                        })
                    }
                </Carousel>
            </div>
        </div>
    );
}