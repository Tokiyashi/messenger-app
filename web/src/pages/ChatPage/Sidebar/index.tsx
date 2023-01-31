import React, { useContext } from "react";
import Container from "./styles/Container";
import { Button } from "@mui/material";
import { Context } from "../../../App";
import UserList from "./UserList";

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
    </Container>
  );
};

export default Sidebar;
