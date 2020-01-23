import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditTodoForm from "./EditTodoForm";
import useToggleState from "./hooks/useToggleState";

export default function Todo({
  task,
  completed,
  id,
  removeTodo,
  toggleTodo,
  editTodo
}) {
  const [isEditing, toggleEditForm] = useToggleState(false);

  const deleteTodo = () => {
    removeTodo(id);
  };

  const handleCheckbox = () => {
    toggleTodo(id);
  };
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm
          id={id}
          task={task}
          editTodo={editTodo}
          toggleEditForm={toggleEditForm}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={handleCheckbox}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={deleteTodo}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleEditForm}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
