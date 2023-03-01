import React from "react";
import Container from "./styles/Container";
import UserList from "../../../features/UserList";
import useWindowDimensions from "../../../shared/hooks/windowDimensions";
import BurgerMenu from "./BurgerMenu";

const Sidebar = () => {
  const { height, width } = useWindowDimensions();

  const isMobile = height > width;

  return (
    <>
      {isMobile ? (
        <BurgerMenu />
      ) : (
        <Container sx={{ backgroundColor: "divider" }}>
          <UserList />
        </Container>
      )}
    </>
  );
};

export default Sidebar;
