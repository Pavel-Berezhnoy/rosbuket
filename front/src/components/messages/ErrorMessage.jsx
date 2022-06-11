import React from 'react'

export default function ErrorMessage({ errors }) {
  return (
    <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
      <div className="text-red-500">
        <svg width="32" height="32" version="1.1" viewBox="0 0 32 32">
          <g transform="scale(2)">
            <circle fill='#f44336' cx="8" cy="8" r="7" />
            <rect fill='#ffffff' width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)" />
            <rect fill='#ffffff' width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)" />
          </g>
        </svg>
      </div>
      <div className="text-lg font-medium ml-3">{errors.map(error => <span key={error}>{error}</span>)}</div>
    </div>
  )
}
