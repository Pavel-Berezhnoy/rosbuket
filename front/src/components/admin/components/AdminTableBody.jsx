import React from "react";

const AdminTableBody = (props) => {
    return (
        <tbody className="bg-white relative">{props.children}</tbody>
    )
}

export default AdminTableBody;