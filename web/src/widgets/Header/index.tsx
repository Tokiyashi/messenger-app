import React from "react";
import Container from "./styles/Container";
import Content from "./styles/Content";
import SignOut from "../../features/SignOut/ui";
import UserNameAndAvatar from "../../entities/User/ui/UserNameAndAvatar";

const Header = () => {
  return (
    <Container sx={{ backgroundColor: "divider" }}>
      <Content>
        <UserNameAndAvatar />
        <SignOut />
      </Content>
    </Container>
  );
};

export default Header;
