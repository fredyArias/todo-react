import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
  function onClickButton() {
    setOpenModal((prevState) => !prevState);
  }

  return (
    <div>
      <button className="modal-button" onClick={() => onClickButton()}>
        🖊️
      </button>
      <div className="line-decoration"></div>
    </div>
  );
}

export { CreateTodoButton };
