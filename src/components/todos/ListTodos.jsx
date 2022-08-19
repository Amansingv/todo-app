import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Todo from "./Todo";
import { getTodos } from "../../store/actions/todoActions";

const ListTodos = ({ setTodo }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const todosStyle = {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0 0 12px -3px #000000 ",
  };

  return (
    <div style={todosStyle}>
      <Typography variant="h5">
        {todos.length <= 0 ? "No Todos Yet" : "Todos"}
      </Typography>

      {todos.map((todo) => {
        return <Todo key={todo._id} todo={todo} setTodo={setTodo} />;
      })}
    </div>
  );
};

export default ListTodos;
