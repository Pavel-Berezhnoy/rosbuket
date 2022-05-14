import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import config from '../../../config/main';
import useImagePreview from '../../../hooks/useImagePreview';

export default function GlossaryForm({ flowerInfo }) {
  const [flower, setFlower] = useState(flowerInfo ? { ...flowerInfo } : {
    name: '',
    description: '',
    short_description: '',
    active: 1
  });
  const { image, setUploaded } = useImagePreview();
  return (
    <>
      <div className="md:flex items-center mt-8">
        <div className="w-full flex flex-col">
          <label className="font-semibold leading-none">Название</label>
          <input type="text" value={flower?.name} onChange={(e) => setFlower({ ...flower, name: e.target.value })} name="name" required className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
        </div>
      </div>
      <div className="w-full flex flex-col mt-8">
        <label className="font-semibold leading-none">Описание</label>
        <textarea type="text" value={flower?.description} onChange={(e) => setFlower({ ...flower, description: e.target.value })} name="description" required className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
      </div>
      <div className="w-full flex flex-col mt-8">
        <label className="font-semibold leading-none">Короткое описание (не больше 500 символов)</label>
        <textarea type="text" value={flower?.short_description} onChange={(e) => setFlower({ ...flower, short_description: e.target.value })} name="short_description" required className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
      </div>
      <div className="md:flex items-center mt-8">
        <div className="w-full flex flex-col">
          <label className="font-semibold leading-none">Показать на сайте?</label>
          <input type="checkbox" value={flower?.active} checked={flower.active} onChange={() => setFlower({ ...flower, active: !flower.active })} name="active" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
        </div>
      </div>
      <div className="grid grid-cols-1 mt-5 mx-7">
        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Загрузить картинку</label>
        <div className="flex">
          {flower.image ? <img className="w-64 mr-8" src={`${config.domain}${flower.image}`} alt="" /> : ""}
          {image ? <img className="w-64 mr-8" src={image} alt="" /> : ""}
          <div className='flex items-center justify-center w-64'>
            <label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group'>
              <div className='flex flex-col items-center justify-center pt-7'>
                <svg className="w-10 h-10 text-purple-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <p className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>Выберите картинку</p>
              </div>
              <input onChange={(e) => setUploaded(e.target.files[0])} name="image" type='file' className="hidden" />
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <button className="mt-9 mr-4 font-semibold leading-none transition-all text-white py-4 px-10 bg-rose-300 rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
          Сохранить
        </button>
        <Link to="/admin/glossary" className="mt-9 py-4 px-10 bg-rose-300 transition-all rounded hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
          <span className="font-semibold leading-none text-white">
            Отменить
          </span>
        </Link>
      </div>
    </>
  )
}
