import React, { useState } from "react";

const MultiFilter = ({ items, activeItems, setActiveItem }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    return (
        <>
            <div
                className="leading-none flex flex-wrap items-start text-gray-900 p-3 h-16 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                onClick={() => setOpenDropdown(!openDropdown)}>
                {activeItems.length > 0 ? activeItems.map(activeItem => {
                    return (
                        <ActiveItem key={activeItem.value} activeItems={activeItems} item={activeItem} setActiveItem={setActiveItem}></ActiveItem>
                    )
                }) : <span>Выберите категории...</span>}
            </div>
            {openDropdown ? <DropdownMenu items={items} activeItems={activeItems} setActiveItem={setActiveItem} /> : ""}
        </>
    )
}

const ActiveItem = ({ item, activeItems, setActiveItem }) => {
    return (
        <div className="mx-2 p-2 border pr-6 rounded border-solid border-gray-700">
            <span>{item.label}</span>
            <span
                onClick={() => setActiveItem(activeItems.filter(activeItem => activeItem.value !== item.value)) }
                className="cursor-pointer ml-2 w-4 h-4 relative before:content-[''] before:absolute before:top-2 before:rotate-45 before:w-4 before:h-0.5 before:bg-red-500 after:content-[''] after:absolute after:top-2 after:rotate-[-45deg] after:w-4 after:h-0.5 after:bg-red-500"></span>
        </div>
    );
}

const DropdownMenu = ({ items, activeItems, setActiveItem }) => {
    const filteredItems = items?.filter(item => activeItems.map(activeItem => activeItem.value).includes(item.value) === false);
    const handleClick = (item) => {
        setActiveItem([...activeItems, item]);
    }
    return (
        <ul className="bg-gray-100 border rounded border-gray-200 p-3 mt-2">
            {filteredItems?.map(item => {
                return (
                    <li key={item.label} className="my-2 font-bold cursor-pointer" onClick={() => handleClick(item)}>- {item.label}</li>
                )
            })}
        </ul>
    )
}

export default MultiFilter;