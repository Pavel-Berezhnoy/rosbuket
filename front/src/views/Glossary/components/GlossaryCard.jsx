import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import config from '../../../config/main'

export default function GlossaryCard({ flower }) {
  return (
    <div className='p-4 my-4 bg-gray-100 flex md:flex-row flex-col'>
      <div className='md:max-w-[150px] md:my-0 my-4 mx-4 w-full md:max-h-[120px]'>
        <img className='w-full' src={`${config.domain}${flower.image}`} alt="flower-image" />
      </div>
      <span className='text-xl mx-4 md:my-0 my-4'>{flower.name}</span>
      <p className='text-xl mx-4 md:my-0 my-4'>{flower.short_description}</p>
      <span>
        <Link className='text-xl mx-4 md:my-0 my-4' to={`/glossary/${flower.id}`}>
          <span className='underline text-blue-500'>Подробнее</span>
        </Link>
      </span>
    </div>
  )
}
