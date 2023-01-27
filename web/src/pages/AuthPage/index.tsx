import React, { useContext } from "react";
import PageContainer from "../styles/PageContainer";
import { Button, Typography } from "@mui/material";
import Content from "./styles/Content";
import {Context} from "../../App";
import {userService} from "../../services/UserService";

const AuthPage = () => {
  const { firebase, auth } = useContext(Context);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider).then( async (data)=>{data?.user && await userService.createUser(data.user)});
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
