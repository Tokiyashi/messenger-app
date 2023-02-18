import React from "react";
import Container from "./styles/Container";
import UserList from "../../features/UserList";
import ThemePicker from "../../features/ThemePicker";
import DeleteAllMessages from "../../features/DeleteAllMessages/ui";

const Sidebar = () => {
  return (
    <Container sx={{ backgroundColor: "divider" }}>
      <UserList />
      <ThemePicker />
      <DeleteAllMessages/>
    </Container>
  );
};

export default Sidebar;
