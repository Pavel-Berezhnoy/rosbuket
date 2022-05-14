import React from 'react'

export default function ReviewForm() {
  return (
    <div className='lg:w-1/2 w-full'>
      <form action="">
        <div className="md:flex items-center mt-8">
          <div className="w-full flex flex-col">
            <label className="font-semibold leading-none">Почта</label>
            <input type="email" required className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
          </div>

        </div>
        <div>
          <div className="w-full flex flex-col mt-8">
            <label className="font-semibold leading-none">Преимущества</label>
            <textarea type="text" required className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col mt-8">
            <label className="font-semibold leading-none">Недостатки</label>
            <textarea type="text" required className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <button className="mt-9 font-semibold transition-all leading-none text-white py-4 px-10 bg-rose-300 rounded hover:bg-rose-500 focus:ring-2 focus:ring-offset-2 focus:ring-rose-600 focus:outline-none">
            Оставить отзыв
          </button>
        </div>
      </form>
    </div>
  )
}
