import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const root = {
    flexGrow: "1",
  };
  const LinkStyling = {
    textDecoration: "none",
    color: "#fafafa",
  };

  const handleSignOut = () => {
    //signout
    dispatch(signOut());
    navigate("signin");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" style={root}>
            <Link to="/" style={LinkStyling}>
              TODO
            </Link>
          </Typography>

          {auth._id ? (
            <>
              <Typography variant="subtitle2" style={root}>
                Logged in as {auth.name}
              </Typography>
              <Button color="inherit" onClick={() => handleSignOut()}>
                SignOut
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link to="signin" style={LinkStyling}>
                  SignIn
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="signup" style={LinkStyling}>
                  SignUp
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
