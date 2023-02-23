import React, { useState } from "react";
import { Avatar, Typography } from "@mui/material";
import { User } from "../../model/types/User";
import useAsyncEffect from "use-async-effect";
import { userService } from "../../../../shared/services/UserService";
import { useParams } from "react-router-dom";
import Container from "./styles/Container";

const UserNameAndAvatar = () => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const { companionId } = useParams();

  useAsyncEffect(async () => {
    const result = companionId && (await userService.getUserByUid(companionId));

    result && setCurrentUser(result);
  }, [companionId]);

  return (
    <Container>
      <Avatar src={currentUser?.photoURL} />
      <Typography fontSize="24px">
        {currentUser && currentUser.displayName}
      </Typography>
    </Container>
  );
};

export default UserNameAndAvatar;
