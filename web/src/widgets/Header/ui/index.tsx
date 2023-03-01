import React from "react";
import Container from "../styles/Container";
import Content from "../styles/Content";
import UserNameAndAvatar from "../../../entities/User/ui/UserNameAndAvatar";
import { IconButton } from "@mui/material";
import { useBurgerMenu } from "../../Sidebar/model/store/BugerMenu";
import useWindowDimensions from "../../../shared/hooks/windowDimensions";
import MenuIcon from "@mui/icons-material/Menu";
import UserMenu from "./UserMenu";

const Header = () => {
  const toggleIsOpen = useBurgerMenu((state) => state.toggleIsOpen);
  const { height, width } = useWindowDimensions();
  const isMobile = height > width;

  return (
    <Container sx={{ backgroundColor: "divider" }}>
      <Content>
        {isMobile && (
          <IconButton onClick={() => toggleIsOpen()}>
            <MenuIcon color="primary" />
          </IconButton>
        )}
        <UserNameAndAvatar />
        <UserMenu />
      </Content>
    </Container>
  );
};

export default Header;
