import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completed, total }) {
  return (
    <h1 className="todo-counter">{`Has completado ${completed} de ${total} TODOs`}</h1>
  );
}

export { TodoCounter };
