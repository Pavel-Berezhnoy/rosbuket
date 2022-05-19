import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { api } from '../../api/api.get';
import SelectRating from '../../views/BouquetDetail/reviews/SelectRating';

export default function ReviewForm() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedRatingError, setSelectedRatingError] = useState('');
  const bouquet = useSelector(state => state.bouquetReducer.bouquet);

  const submitReviewHandle = async e => {
    e.preventDefault();
    const reviewForm = new FormData(document.forms.submitReview);
    reviewForm.set('bouquet_id', bouquet.id);
    if (!selectedRating)
      return setSelectedRatingError('Необходимо выбрать оенку.');

    reviewForm.set('estimate', selectedRating);
    setSelectedRatingError('');
    await api.post(`api/review`, reviewForm);
  }

  return (
    <form name='submitReview' action="" onSubmit={submitReviewHandle}>
      <div className="flex mb-4">
        <span>
          <label className="font-semibold leading-none">Оценка*</label>
          {selectedRatingError && <div className='text-red-500 text-lg mt-4'><span>{selectedRatingError}</span></div>}
          <SelectRating selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
        </span>
      </div>
      <div className="w-full flex flex-col mt-8">
        <label className="font-semibold leading-none">Имя*</label>
        <input type="text" required name='username' className="leading-none text-gray-900 p-3 focus:outline-none focus:border-none mt-4 bg-gray-100 border rounded border-gray-200" />
      </div>
      <div className="w-full flex flex-col mt-8">
        <label className="font-semibold leading-none">Преимущества*</label>
        <textarea type="text" name='advantages' required className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
      </div>
      <div className="w-full flex flex-col mt-8">
        <label className="font-semibold leading-none">Недостатки*</label>
        <textarea type="text" name='disadvantages' required className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
      </div>
      <div className="w-full flex flex-col mt-8">
        <label className="font-semibold leading-none">Комментарий</label>
        <textarea type="text" name='comment' className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
      </div>
      <div className="flex items-center justify-center w-full">
        <button className="mt-9 font-semibold transition-all leading-none text-white py-4 px-10 bg-rose-300 rounded hover:bg-rose-500 focus:ring-2 focus:ring-offset-2 focus:ring-rose-600 focus:outline-none">
          Оставить отзыв
        </button>
      </div>
    </form>
  )
}
