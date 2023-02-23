import React from "react";
import PageContainer from "../styles/PageContainer";
import {Button, Typography} from "@mui/material";
import Content from "./styles/Content";
import {userService} from "../../shared/services/UserService";
import _ from "lodash";
import {DEFAULT_USER} from "../../entities/User/constants/DefaultUser";
import {User} from "../../entities/User/model/types/User";
import {useFirebase} from "../../shared/hooks/firebase";

const AuthPage = () => {
  const auth = useFirebase((state) => state.auth);
  const firebase = useFirebase((state) => state.firebase);

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
