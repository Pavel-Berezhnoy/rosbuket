import React from "react";
import "./style/style.css";

const Input = ({type, placeholder, onChange, value, name, required}) => {
    const isCheckbox = type == "checkbox" ? placeholder : "";
    return (
        <>
            <input onInput={onChange} type={type} placeholder={placeholder} value={value} name={name}/><span>{isCheckbox}</span>
        </>
    );
}

export default Input;
