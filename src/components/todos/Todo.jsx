import React from "react";
import { Typography, Button, ButtonGroup } from "@mui/material";
import { Create, Delete, CheckCircle } from "@mui/icons-material";
import moment from "moment";
import { useDispatch } from "react-redux";
import { checkTodo, deleteTodo } from "../../store/actions/todoActions";

const Todo = ({ todo, setTodo }) => {
  const dispatch = useDispatch();

  const todoStyle = {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  };

  const isComplete = {
    color: "green",
  };

  const checked = {
    textDecoration: "line-through",
  };

  const handleUpdateClick = () => {
    setTodo(todo);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCheck = (id) => {
    dispatch(checkTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div style={todoStyle}>
      <div>
        {todo.isComplete ? (
          <Typography variant="subtitle1" style={checked}>
            {todo.name}
          </Typography>
        ) : (
          <Typography variant="subtitle1">{todo.name}</Typography>
        )}

        <Typography variant="body2" color="primary">
          Author: {todo.author}
        </Typography>
        <Typography variant="body2" color="secondary">
          Added: {moment(todo.date).fromNow()}
        </Typography>
      </div>
      <div>
        <ButtonGroup size="small" aria-label="outlined primary button group">
          <Button onClick={() => handleCheck(todo._id)}>
            {todo.isComplete ? (
              <CheckCircle style={isComplete} />
            ) : (
              <CheckCircle color="action" />
            )}
          </Button>

          <Button onClick={() => handleUpdateClick()}>
            <Create color="primary" />
          </Button>

          <Button onClick={() => handleDelete(todo._id)}>
            <Delete color="error" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Todo;
