import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function FlowersLine({ flowers }) {
  return (
    <div className='bg-gray-100 flex items-start py-4 justify-between'>
      <span className='text-lg px-4'>Цветы</span>
      <div className='px-4'>
        {flowers.length && flowers.map(flower => <Link key={flower.id} to={`/glossary/${flower.id}`} className='text-lg underline' >
          {flower.name + ', '}
        </Link>)}
      </div>
    </div>
  )
}
