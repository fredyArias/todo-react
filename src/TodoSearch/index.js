import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  function onSearchValueChange(event) {
    console.log(event.target.value);
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
