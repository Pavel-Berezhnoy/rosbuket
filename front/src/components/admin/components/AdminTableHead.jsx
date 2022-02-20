import React from "react";

const AdminTableHead = (props) => {
    return (
        <thead>
            <tr>{props.children}<th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider text-right">Действие</th></tr>
        </thead>
    )
}

export default AdminTableHead;