import React, { useState } from "react";

const DeletePopup = ({ setQuestion, deleteHandle }) => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            {opened ? <div className="absolute z-8 bg-slate-200 shadow-md shadow-dashboard bottom-full flex flex-col items-center text-base rounded p-4 font-bold">
                <h2>Удалить запись?</h2>
                <div>
                    <span className="cursor-pointer" onClick={() => {setQuestion(true);deleteHandle();setOpened(false)}}>Да</span>
                    <span className="ml-2 cursor-pointer" onClick={() => {setQuestion(false);setOpened(false)}}>Нет</span>
                </div>
            </div> : ""}
            <button onClick={() => setOpened(true)} className="px-5 py-2 border-blue-500 border text-red-500 rounded transition duration-300 hover:text-white hover:bg-red-700 hover:text-white focus:outline-none">Удалить</button>
        </>
    )
}

export default DeletePopup;