import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="alert-background">
        <div className="alert">
          <p>changes were made is recomended</p>
          <button onClick={() => toggleShow(false)}>Refresh page</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
