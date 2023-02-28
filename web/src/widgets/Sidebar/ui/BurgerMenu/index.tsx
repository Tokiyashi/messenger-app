import React from "react";
import { IconButton } from "@mui/material";
import UserList from "../../../../features/UserList";
import DeleteAllMessages from "../../../../features/DeleteAllMessages/ui";
import { useBurgerMenu } from "../../model/store/BugerMenu";
import Container from "./styles/Container";
import Menu from "./styles/Menu";
import CloseIcon from "@mui/icons-material/Close";

const BurgerMenu = () => {
  const isOpenMenu = useBurgerMenu((state) => state.isOpenMenu);
  const toggleIsOpen = useBurgerMenu((state) => state.toggleIsOpen);

  return (
    <Container isOpen={isOpenMenu}>
      <Menu sx={{ backgroundColor: "background.default" }}>
        <IconButton onClick={() => toggleIsOpen()}>
          <CloseIcon />
        </IconButton>
        <UserList />
        <DeleteAllMessages />
      </Menu>
    </Container>
  );
};

export default BurgerMenu;
