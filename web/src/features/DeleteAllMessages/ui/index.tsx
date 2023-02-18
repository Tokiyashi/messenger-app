import React from 'react';
import {Button} from "@mui/material";
import firebase from "firebase/compat";

const DeleteAllMessages = () => {
  const handleDeleteAll = async () => {
    await firebase
      .firestore()
      .collection("messages")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => doc.ref.delete());
      });
  };

  return (
    <Button onClick={handleDeleteAll}>
      Delete All Messages
    </Button>
  );
};

export default DeleteAllMessages;