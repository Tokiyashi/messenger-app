import { Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import Container from "./styles/Container";
import firebase from "firebase/compat";
import { Context } from "../../main";

const Header = () => {
  const { auth, firebase } = useContext(Context);
  const handleSignOut = () => {
    return auth.signOut();
  };

  return (
    <Container sx={{ backgroundColor: "divider" }}>
      <Typography> TokiChat </Typography>
      <Button onClick={handleSignOut}> Sign Out </Button>
    </Container>
  );
};

export default Header;
