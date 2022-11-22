import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  function onClickButton(msg) {
    alert(msg);
  }

  return <button onClick={() => onClickButton("Melo")}>+</button>;
}

export { CreateTodoButton };
