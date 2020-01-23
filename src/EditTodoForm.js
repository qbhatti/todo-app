import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

export default function EditTodoForm({ editTodo, id, toggleEditForm, task }) {
  const [value, handleChange, reset] = useInputState(task);

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(id, value);
    toggleEditForm();
    reset();
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <TextField
        autoFocus
        required
        value={value}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
    </form>
  );
}
