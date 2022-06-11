import React from 'react';

const SuccessMessage = ({ success }) => {
    return (
        <>
            <div className="text-green-500">
                <svg className="w-5 sm:w-8 h-5 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="text-lg font-medium ml-3">{success.map(success => <span key={success}>{success}</span>)}</div>
        </>
    )
}

export default SuccessMessage;