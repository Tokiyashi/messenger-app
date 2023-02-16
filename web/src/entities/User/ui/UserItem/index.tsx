import React, { FunctionComponent } from "react";
import Container from "./styles/Container";
import { useNavigate } from "react-router-dom";
import { User } from "../../../../shared/types/User";
import { Typography } from "@mui/material";
import { useFetchDirectMessages } from "../../../../widgets/DirectBox/hooks/fetchDirectMessages";
import TextBlock from "./styles/TextBlock";
import UserAvatar from "./styles/userAvatar";

type UserItemProps = {
  user: User;
};

const UserItem: FunctionComponent<UserItemProps> = ({ user }) => {
  const navigate = useNavigate();
  const MAX_MESSAGE_SIZE = 16;

  const handleNavigate = () => {
    navigate(`/direct/${user.uid}`);
  };

  const messages = useFetchDirectMessages(user.uid);
  const lastMessage = messages[messages.length - 1];
  const cutText = `${lastMessage?.message.slice(0, MAX_MESSAGE_SIZE)}${
    lastMessage?.message.length > MAX_MESSAGE_SIZE ? "..." : ""
  }`;

  return (
    <Container onClick={handleNavigate}>
      <UserAvatar sx={{ width: 60, height: 60 }} src={user.photoURL} />
      <TextBlock>
        <Typography textTransform="none" textAlign="left">
          {user.displayName}
        </Typography>
        {!!messages.length && (
          <Typography textTransform="none" variant="subtitle1" color="divider">
            {cutText || ""}
          </Typography>
        )}
      </TextBlock>
    </Container>
  );
};

export default UserItem;
