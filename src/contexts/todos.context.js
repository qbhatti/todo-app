import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

export const TodosContext = createContext();

export function TodosProvider({ children }) {
  const todosStuff = useTodoState([]);

  return (
    <TodosContext.Provider value={todosStuff}>{children}</TodosContext.Provider>
  );
}
