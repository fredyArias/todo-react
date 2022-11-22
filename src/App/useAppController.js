import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useAppController() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length < 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  console.log("before");

  useEffect(() => {
    console.log("useEffect");
  }, [todos]);

  console.log("after");

  return {
    setSearchValue,
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
  };
}

export { useAppController };
