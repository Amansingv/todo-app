import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, TextField, Button } from "@mui/material";
import { signIn } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
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
    dispatch(signIn(creds));
    setCreds({
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
        <Typography variant="h5">SIGN IN</Typography>
        <TextField
          style={spacing}
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        />
        <TextField
          style={spacing}
          type="password"
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <Button
          style={spacing}
          variant="contained"
          color="primary"
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </>
  );
};

export default SignIn;
