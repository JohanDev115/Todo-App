import React from "react";
import './CreateItemButton.css';
import { useNavigate } from "react-router-dom";

function CreateItemButton() {

  const navigate = useNavigate();

  return (
    <button className="CreateItemButton" onClick={() => navigate('/new')}>+</button>
  );
}

export { CreateItemButton };