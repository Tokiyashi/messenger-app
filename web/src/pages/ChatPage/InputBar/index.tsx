import React, {FunctionComponent, KeyboardEvent, KeyboardEventHandler, useContext, useState} from "react";
import {Button, TextField} from "@mui/material";
import Container from "./styles/Container";
import firebase from "firebase/compat";
import User = firebase.User;
import { Context } from "../../../main";
import { ChatMessage } from "../../../common/types/chatMessage";
import SendIcon from '@mui/icons-material/Send';
import SendButton from "./styles/SendButton";

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

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) =>{
    if (event.code === 'Enter'){
      handleAddMessage()
    }
  }

  return (
    <Container sx={{ backgroundColor: "divider" }}>
      <TextField
        value={value}
        placeholder="Type something..."
        onKeyDown={handleKeyDown}
        onChange={(e) => handleValueChange(e.target.value)}
        />
      <SendButton variant="contained" onClick={handleAddMessage}>
        <SendIcon />
      </SendButton>
    </Container>
  );
};

export default InputBar;
