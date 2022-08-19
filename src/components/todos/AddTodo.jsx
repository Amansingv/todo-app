import React from "react";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";

import { addTodo, updateTodo } from "../../store/actions/todoActions";

const AddTodo = ({ todo, setTodo }) => {
  const dispatch = useDispatch();

  const formStyles = {
    margin: "0 auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0 0 12px -3px #000000",
    display: "flex",
    justifyContent: "space-between",
  };
  const btnStyles = {
    marginLeft: "20px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      const id = todo._id;
      const updatedTodo = {
        name: todo.name,
        isComplete: todo.isComplete,
        date: todo.date,
        author: todo.author,
        uid: todo.uid
      };
      dispatch(updateTodo(updatedTodo, id));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };
      dispatch(addTodo(newTodo));
    }

    console.log(todo);
    setTodo({
      name: "",
      isComplete: false,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        style={formStyles}
      >
        <TextField
          id="enter-todo"
          label="ENTER TODO"
          variant="outlined"
          autoFocus
          fullWidth
          value={todo.name}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />
        <Button type="submit" style={btnStyles}>
          <Send />
        </Button>
      </form>
    </>
  );
};

export default AddTodo;
