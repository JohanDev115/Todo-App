import React from "react";
import './CreateItemButton.css';

function CreateItemButton(props) {
  const openModalEvent = () => {
    props.setOpenModal(true);
  }

  return (
    <button className="CreateItemButton" onClick={openModalEvent}>+</button>
  );
}

export { CreateItemButton };