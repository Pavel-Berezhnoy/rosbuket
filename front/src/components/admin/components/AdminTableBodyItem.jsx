import React from "react";

const AdminTableBodyItem = (props) => {
    return <td className="px-6 text-sm leading-5 text-gray-800 py-4 whitespace-no-wrap border-gray-500">{props.children}</td>;
}

export default AdminTableBodyItem;