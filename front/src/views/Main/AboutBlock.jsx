import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/images/assortiment-cvetochnogo-magazina.jpg";

const AboutBlock = () => {

    return (
        <div className='flex mt-12 flex-wrap justify-between'>
            <div className="about__suggestion flex items-baseline flex-col mb-24 justify-between max-w-[450px]">
                <h2>
                    Магазин предлагает:
                </h2>
                <ol className="about__suggestion-list">
                    <li>Для розничных покупателей - огромный выбор цветов, букетов, композиций и подарков к ним.</li>
                    <li>Консультации профессиональных флористов по выбору цветов.</li>
                    <li>Оформление любого праздничного мероприятия.</li>
                    <li>Круглосуточную доставку по Ростову-на-Дону, при сумме заказа свыше 4000 руб. - бесплатно.</li>
                </ol>
                <Link to={"/about"} className='bg-pink-300 hover:bg-pink-500 transition-all py-4 px-8'><span className='font-bold text-white'>Подробнее</span></Link>
            </div>
            <div className="about__image max-w-[600px]">
                <img src={image} alt="ytn" />
            </div>
        </div>
    )
}

export default AboutBlock;