import React from "react";
import { Link } from "react-router-dom";

const AdminTitile = ({ text, linkAdd }) => {
    return (
        <div className="my-12 flex items-center">
            <h2 className="text-4xl font-bold">{text}</h2>
            <Link
                to={linkAdd}
                className="ml-4 transition-all hover:bg-green-700 hover:border-green-700 hover:text-white py-2 px-4 border border-solid rounded text-black border-gray-900">
                <span style={{ color: "inherit" }}>Добавить</span>
            </Link>
        </div>
    )
}

export default AdminTitile;