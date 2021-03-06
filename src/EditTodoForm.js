import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

export default function EditTodoForm({ id, toggleEditForm, task }) {
  const [value, handleChange, reset] = useInputState(task);

  const dispatch = useContext(DispatchContext);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "EDIT", id: id, newTask: value });
    toggleEditForm();
    reset();
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "80%", marginLeft: "1rem" }}>
      <TextField
        autoFocus
        required
        value={value}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Cancel"
          onClick={toggleEditForm}
          color="secondary"
        >
          <CloseIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </form>
  );
}
