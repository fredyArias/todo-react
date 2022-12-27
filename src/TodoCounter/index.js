import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <h1 className="todo-counter">{`Has completado ${completedTodos} de ${totalTodos} TODOs`}</h1>
  );
}

export { TodoCounter };
