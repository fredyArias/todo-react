import { useState } from "react";
// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Completar curso react", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Lalalalala", completed: true },
// ];

export function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  function saveItem(newItem) {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return [item, saveItem];
}
