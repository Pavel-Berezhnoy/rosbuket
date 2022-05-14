import React from 'react';
import notFound from '../../assets/images/not_found.png';

export default function NotFoundPage() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='my-12 text-2xl font-bold'>К сожалению, такой страницы нет</h1>
      <img className='max-w-[500px]' src={`${notFound}`} alt="not-found" />
    </div>
  )
}
