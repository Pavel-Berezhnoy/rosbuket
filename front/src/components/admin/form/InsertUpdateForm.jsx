import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const InsertUpdateForm = (props) => {
    const { id } = useParams();
    return (
        <>
            <div className="p-4 bg-gray-100">
                <h1 className="ml-2 font-bold uppercase">{id ? props.titleUpdate : props.titleAdd}</h1>
            </div>
            <div className="p-4">
                <div className="w-full">
                    <div className="bg-white h-80"></div>
                    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                        <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72" onSubmit={props.submitHandle}>
                            <form name="addUpdate">
                                {props.children}
                            </form>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default InsertUpdateForm;