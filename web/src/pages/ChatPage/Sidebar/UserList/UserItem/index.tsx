import React, { FunctionComponent } from "react";
import Container from "./styles/Container";
import { User } from "../../../../../common/types/User";

type UserItemProps = {
  user: User;
};

const UserItem: FunctionComponent<UserItemProps> = ({ user }) => {
  return <Container>{user.displayName}</Container>;
};

export default UserItem;
