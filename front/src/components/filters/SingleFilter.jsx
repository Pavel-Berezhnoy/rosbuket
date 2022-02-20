import React, { useState } from "react";

const SingleFilter = ({ items, activeItem, setActiveItem }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    return (
        <>
            <div
                className="transition-all hover:border-gray-400 flex cursor-pointer flex-wrap items-center text-gray-900 p-3 h-12 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border border-solid rounded border-gray-300"
                onClick={() => setOpenDropdown(!openDropdown)}>
                {activeItem.value !== 0 ? <ActiveItem item={activeItem} ></ActiveItem> : <span>Выберите категорию...</span>}
            </div>
            {openDropdown ? <DropdownMenu items={items} activeItem={activeItem} setActiveItem={setActiveItem} /> : ""}
        </>
    )
}

const ActiveItem = ({ item }) => {
    return (
        <div className="border font-bold">
            <span>{item.label}</span>
        </div>
    );
}

const DropdownMenu = ({ items, activeItem, setActiveItem }) => {
    const filteredItems = items?.filter(item => item.value !== activeItem.value);
    const handleClick = (item) => {
        setActiveItem(item);
    }
    return (
        <ul className="bg-gray-100">
            {filteredItems?.map(item => {
                return (
                    <li key={item.label} className="p-3 cursor-pointer" onClick={() => handleClick(item)}>- {item.label}</li>
                )
            })}
        </ul>
    )
}

export default SingleFilter;