import React, {useState, useEffect} from "react";
import { api } from '../../api/api.get';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from './responsive';
import Card from '../../components/Card';

export default function Sales() {
    const [sale,setSales] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await api.get(`/api?sale=true`);
            setSales( response.data);
        })();
    },[]);
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
                    {
                        sale?.map((bouquet) => {
                            return <Card key={bouquet.id} bouquet={bouquet} />;
                        })
                    }
                </Carousel>
            </div>
        </div>
    );
}