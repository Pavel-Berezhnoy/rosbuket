import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function GlossaryLoader() {
  return (
    <div className='p-4 my-4 bg-gray-100 w-full flex'>
      <Skeleton width={150} height={120} className='flex-auto mx-4' />
      <div className='flex-[0_1_20%] text-xl mx-4'><Skeleton /></div>
      <div className='flex-auto text-xl mx-4'><Skeleton height={120} /></div>
      <div className='mx-4 flex-[0_1_10%]'><Skeleton /></div>
    </div>
  )
}
