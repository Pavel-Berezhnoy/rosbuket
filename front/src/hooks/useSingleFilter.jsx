import { useState } from "react";

const useSingleFilter = () => {
    const [activeItem, setActiveItem] = useState({
        label: "",
        value: 0
    });
    return ({
        activeItem,
        setActiveItem
    })
}

export default useSingleFilter;