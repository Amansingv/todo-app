import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodos from "./ListTodos";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [todo, setTodo] = useState({
    name: "",
    isComplete: false,
  });

  if (!auth._id) navigate("signin");

  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodos setTodo={setTodo} />
    </>
  );
};

export default Todos;
