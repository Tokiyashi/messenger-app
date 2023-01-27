import React, { useContext } from "react";
import PageContainer from "../styles/PageContainer";
import { Button, Typography } from "@mui/material";
import { Context } from "../../main";
import Content from "./styles/Content";

const AuthPage = () => {
  const { firebase, auth, firestore } = useContext(Context);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  };

  return (
    <PageContainer>
      <Content>
        <Typography> Welcome To Best Chat! </Typography>
        <Button variant='contained' onClick={signInWithGoogle}> Sign In With Google </Button>
      </Content>
    </PageContainer>
  );
};

export default AuthPage;
