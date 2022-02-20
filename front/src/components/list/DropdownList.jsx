import React, { useState } from "react";
import './styles/dropdownlist.css';

const DropdownList = (props) => {
  const [selected, setSelected] = useState("");
  const handleSelected = (child) => {
    setSelected(child);
  }
  const mappedChildrens = props.children.map(child => {
    return React.cloneElement(child, {handleSelected : handleSelected})
  });
  return (
    <>
    <span>{selected}</span>
    <ul className="elements-list">
      <li>
        <ul>
          {mappedChildrens}
        </ul>
      </li>
    </ul>
    </>
  );
}

const DropdownItem = ({ children, value, handleValue, handleSelected }) => {
  const handleClick = () => {
    handleValue(value);
    handleSelected(children);
  }
  return (
    <li onClick={handleClick}>{children}</li>
  );
}

export { DropdownItem }

export default DropdownList;