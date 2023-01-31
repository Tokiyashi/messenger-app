import React, { useContext } from "react";
import PageContainer from "../styles/PageContainer";
import { Button, Typography } from "@mui/material";
import Content from "./styles/Content";
import { Context } from "../../App";
import { userService } from "../../services/UserService";
import _ from "lodash";
import { DEFAULT_USER } from "../../common/constants/DefaultUser";
import { User } from "../../common/types/User";

const AuthPage = () => {
  const { firebase, auth } = useContext(Context);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider).then(async (data) => {
      data?.user &&
        (await userService.createUser(
          _.pick(data.user, Object.keys(DEFAULT_USER)) as User
        ));
    });
  };

  return (
    <PageContainer>
      <Content>
        <Typography> Welcome To The Best Chat! </Typography>
        <Button variant="contained" onClick={signInWithGoogle}>
          Sign In With Google
        </Button>
      </Content>
    </PageContainer>
  );
};

export default AuthPage;
