import React from "react";
import Container from "./styles/Container";
import UserList from "../../features/UserList";
import ThemePicker from "../../features/ThemePicker";

const Sidebar = () => {
  return (
    <Container sx={{ backgroundColor: "divider" }}>
      <UserList />
      <ThemePicker />
    </Container>
  );
};

export default Sidebar;
