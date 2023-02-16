import React, { useContext } from "react";
import Container from "./styles/Container";
import { Button } from "@mui/material";
import UserList from "../../features/UserList";
import { Context } from "../../app/App";
import ThemePicker from "../../features/ThemePicker";

const Sidebar = () => {
  const { firestore } = useContext(Context);

  const handleDelete = async () => {
    await firestore
      .collection("messages")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => doc.ref.delete());
      });
  };

  return (
    <Container sx={{ backgroundColor: "divider" }}>
      <UserList />
      <Button onClick={handleDelete}> Delete </Button>
      <ThemePicker />
    </Container>
  );
};

export default Sidebar;
