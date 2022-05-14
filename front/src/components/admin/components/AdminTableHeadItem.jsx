import React from "react";

const AdminTableHeadItem = (props) => {
    return <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">{props.children}</th>;
}

export default AdminTableHeadItem;