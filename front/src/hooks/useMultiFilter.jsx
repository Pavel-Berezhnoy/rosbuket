import React, { useState } from "react";

const useMultiFilter = () => {
    const [activeItems, setActiveItems] = useState([]);
    return ({
        activeItems,
        setActiveItems
    })
}

export default useMultiFilter;