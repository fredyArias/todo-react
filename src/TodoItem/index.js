import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`icon-check ${props.completed && "icon-check-completed"}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p className={`${props.completed && "text-complete"}`}>{props.text}</p>
      <span className="icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
