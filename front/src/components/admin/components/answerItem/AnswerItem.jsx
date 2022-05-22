import React from 'react'

export default function AnswerItem({ answer, updateReview }) {
  const updateAnswerHandle = (validate) => {
    updateReview(prevReview => ({
      ...prevReview,
      answers: prevReview.answers.map(prevAnswer => prevAnswer.id === answer.id ? { ...answer, validate: validate ? 1 : 0 } : prevAnswer)
    }))
  }
  return (
    <tr>
      <td className="hidden text-center pb-4 md:table-cell">
        {answer?.id}
      </td>
      <td >
        <p className="mb-2 md:ml-4">{answer.username}</p>
      </td>
      <td className="justify-center items-center md:justify-end md:flex mt-6">
        <div className="w-20 h-10">
          <div className="relative w-full h-8">
            <p className="w-full font-semibold text-center text-gray-700 outline-none focus:outline-none hover:text-black focus:text-black" >
              {answer.message}
            </p>
          </div>
        </div>
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="text-sm lg:text-base font-medium">
          <label htmlFor={`answer${answer.id}`} className="relative flex-inline items-center isolate p-4 rounded-2xl">
            <input id={`answer${answer.id}`} onChange={e => updateAnswerHandle(e.target.checked)} type="checkbox" value={answer.validate} checked={answer.validate} className="relative peer z-20 text-purple-600 rounded-md focus:ring-0" />
            <div className="absolute inset-0 bg-white peer-checked:bg-purple-50 peer-checked:border-purple-300 z-10 border rounded-2xl"></div>
          </label>
        </span>
      </td>
    </tr>
  )
}
