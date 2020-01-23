import useLocalStorageState from "./useLocalStorageState.js";
import uuid from "uuid/v4";

export default defaultTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", defaultTodos);

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: id => {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
    },
    toggleTodo: id => {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      setTodos(updatedTodos);
    },
    editTodo: (id, newTask) => {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    }
  };
};
