import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { setSearchValue, searchValue } = useContext(TodoContext);
  function onSearchValueChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <input
      placeholder="Escriba un todo"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );
}

export { TodoSearch };
