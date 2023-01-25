import React, { FunctionComponent, useContext, useState } from "react";
import { Button, Input } from "@mui/material";
import Container from "./styles/Container";
import firebase from "firebase/compat";
import User = firebase.User;
import { Context } from "../../../main";
import { ChatMessage } from "../../../common/types/chatMessage";

type InputBarProps = {
  user: User;
};

const InputBar: FunctionComponent<InputBarProps> = ({ user }) => {
  const [value, setValue] = useState("");
  const { firestore } = useContext(Context);
  const handleAddMessage = async () => {
    setValue("");

    if (!value) {
      return;
    }
    const message: ChatMessage = {
      message: value,
      uid: user.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    await firestore.collection("messages").add(message);
  };

  const handleValueChange = (input: string) => {
    setValue(input);
  };

  return (
    <Container sx={{ backgroundColor: "primary.light" }}>
      <Input
        value={value}
        placeholder="type"
        onChange={(e) => handleValueChange(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddMessage}>
        {" "}
        SEND MESSAGE{" "}
      </Button>
    </Container>
  );
};

export default InputBar;
