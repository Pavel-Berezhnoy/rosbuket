import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import config from "../../config/main";
import bouquetThunk from "../../store/actions/bouquetActions";
import cartThunk from "../../store/actions/cartThunk";
import "../../styles/index.css";
import cartStore from "../Cart/cart-store";
import RecomendedSlider from "./RecomendedSlider";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(bouquetThunk(`/api/bouquet/${id}`));
    }, [id]);
    const AddCartHandler = () => {
        cartStore.addItem({ id: bouquet.id, quantity: 1 });
        dispatch(cartThunk());
    }
    const bouquet = useSelector(state => state.bouquetReducer.bouquet);
    const cart = useSelector(state => state.cartReducer.cart) || [];
    const inCart = cart.filter(cartItem => cartItem.id == bouquet.id) || [];
    return (
        <>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="mx-auto flex flex-wrap">
                        <img alt={bouquet.name} className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={config.domain + bouquet.image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{bouquet.categories ? bouquet.categories[0]?.name : ""}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-6">{bouquet.name}</h1>
                            <p className="leading-relaxed">{bouquet.description}</p>
                            <div className="flex mt-6 items-center">
                                <span className="title-font font-medium text-2xl text-gray-900">{bouquet.price} руб.\шт.</span>
                                {inCart.length === 0 ?
                                    <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                                        onClick={AddCartHandler}>
                                        В корзину
                                    </button>
                                    :
                                    <button className="flex ml-auto text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none rounded cursor-default">
                                        В корзине
                                    </button>}
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RecomendedSlider></RecomendedSlider>
        </>
    )
}

export default Detail;