import React from 'react';

const SuccessMessage = ({ text, opened }) => {
    let styles = [
        'fixed', 'flex', 'flex-col', 'sm:flex-row', 'sm:items-center','duration-1000', 'left-1/2', 'transform', '-translate-x-1/2', 'bg-white', 'shadow', 'rounded-md', 'py-5', 'pl-6', 'pr-8', '-z-10', 'sm:pr-6','opacity-0','transition-all'
    ];
    if (opened) {
        styles.splice(styles.indexOf('opacity-0'),1,'opacity-100');
        styles.splice(styles.indexOf('-z-10'),1,'z-10');
    }
    return (
        <>
            <div className={styles.join(" ")}>
                <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                    <div className="text-green-500">
                        <svg className="w-5 sm:w-8 h-5 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="text-lg font-medium ml-3"><span>{text}</span></div>
                </div>
            </div>
        </>
    )
}

export default SuccessMessage;