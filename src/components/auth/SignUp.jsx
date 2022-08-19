import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

const SignUp = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formStyles = {
    margin: "0 auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0 0 12px -3px #000000",
  };

  const spacing = {
    marginTop: "20px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  if (auth._id) return navigate("/");

  return (
    <>
      <form
        style={formStyles}
        action="#"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">SIGN UP</Typography>
        <TextField
          style={spacing}
          id="name"
          label="Name"
          variant="outlined"
          fullWidth
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <TextField
          type="email"
          style={spacing}
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          style={spacing}
          type="password"
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          style={spacing}
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default SignUp;
