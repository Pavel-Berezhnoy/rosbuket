import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCart } from "../../components/App";
import CardReview from "../../components/cardReviews/CardReview";
import PriceView from "../../components/discount/DiscountView";
import NotFoundBouquet from "../../components/not-found/NotFoundBouquet";
import config from "../../config/main";
import bouquetThunk from "../../store/actions/bouquetThunk";
import cartThunk from "../../store/actions/cartThunk";
import "../../styles/index.css";
import cartStore from "../Cart/cart-store";
import FlowersLine from "./FlowersLine";
import RecomendedSlider from "./RecomendedSlider";
import Reviews from "./reviews/Reviews";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const bouquetData = useSelector(state => state.bouquetReducer);
  const cart = useSelector(state => state.cartReducer.cart) || [];
  const inCart = cart.filter(cartItem => cartItem.id == bouquetData.bouquet.id) || [];

  useEffect(() => dispatch(bouquetThunk(`/api/bouquet/${id}`)), [id]);

  const AddCartHandler = () => {
    cartStore.addItem({ id: bouquetData.bouquet.id, quantity: 1 });
    dispatch(cartThunk(getCart));
  }

  console.log(bouquetData);

  return (
    <>
      {bouquetData.isLoading
        ? <div>loading...</div>
        : (bouquetData.errors
          ? <>
            <NotFoundBouquet><span>{bouquetData.errors?.message}</span></NotFoundBouquet>
            <RecomendedSlider />
          </>
          : <>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
              <div className="container px-5 py-24 mx-auto">
                <div className="mx-auto flex flex-wrap">
                  <img alt={bouquetData.bouquet.name} className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={config.domain + bouquetData.bouquet.image} />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">{bouquetData.bouquet.categories ? bouquetData.bouquet.categories[0]?.name : ""}</h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium">{bouquetData.bouquet.name}</h1>
                    <div className="flex items-center my-4">
                      <span className="mr-4 flex items-center">
                        <CardReview ratingValue={bouquetData.bouquet.reviews_avg_estimate} />
                        <span className="ml-2">{Number(bouquetData.bouquet.reviews_avg_estimate).toFixed(1)}</span>
                      </span>
                      <span className="mr-4">
                        Заказов: {bouquetData.bouquet.orders_count}
                      </span>
                      <span>
                        Отзывов: {bouquetData.bouquet.reviews_count}
                      </span>
                    </div>
                    <p className="leading-relaxed">{bouquetData.bouquet.description}</p>
                    {bouquetData.bouquet?.flowers?.length
                      ? <FlowersLine flowers={bouquetData.bouquet.flowers} />
                      : <></>}
                    <div className="flex mt-6 items-center">
                      <PriceView price={bouquetData.bouquet.price} discount={bouquetData.bouquet.discount} />
                      {inCart.length
                        ? <button className="flex ml-auto text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none rounded cursor-default">
                          В корзине
                        </button>
                        : <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                          onClick={AddCartHandler}>
                          В корзину
                        </button>}
                      <button title="В избранное" className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <RecomendedSlider />
            <Reviews />
          </>)}
    </>
  )
}