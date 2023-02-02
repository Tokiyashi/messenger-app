import React, { FunctionComponent } from "react";
import Container from "./styles/Container";
import { User } from "../../../../../common/types/User";
import { useNavigate } from "react-router-dom";

type UserItemProps = {
  user: User;
};

const UserItem: FunctionComponent<UserItemProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${user.chatId}`);
  };

  return <Container onClick={handleNavigate}>{user.displayName}</Container>;
};

export default UserItem;
