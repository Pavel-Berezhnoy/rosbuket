import React from 'react'

export default function PriceView({ price, discount }) {
  return (
    <div className="flex flex-col">
      {discount > 0 ? <span className="whitespace-nowrap text-black inline-flex font-bold items-center leading-none text-xl py-1">{price - discount} руб.\шт.</span> : ``}
      <span className="catalog__bouquet-card-price mt-0">
        {discount > 0 ? <del className="text-red-300">{price} руб.\шт.</del> : `${price} руб.\\шт.`}
      </span>
    </div>
  )
}
