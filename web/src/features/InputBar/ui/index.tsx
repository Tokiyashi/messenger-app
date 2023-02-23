import React, { FunctionComponent, KeyboardEvent, useState } from "react";
import Container from "./styles/Container";
import SendIcon from "@mui/icons-material/Send";
import SendButton from "./styles/SendButton";
import StyledTextField from "./styles/StyledTextField";
import useAddNewMessage from "../model/useAddNewMessage";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Button } from "@mui/material";
const InputBar: FunctionComponent = () => {
  const [value, setValue] = useState("");

  const createMessage = useAddNewMessage(value);
  const handleAddMessage = async () => {
    await createMessage();
    setValue("");
  };

  const handleValueChange = (input: string) => {
    setValue(input);
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Enter") {
      await handleAddMessage();
    }
  };

  return (
    <Container sx={{ backgroundColor: "divider" }}>
      <Button>
        <AttachFileIcon />
      </Button>
      <StyledTextField
        variant="filled"
        value={value}
        placeholder="Type something..."
        onKeyDown={handleKeyDown}
        fullWidth
        onChange={(e) => handleValueChange(e.target.value)}
      />
      <SendButton variant="contained" onClick={handleAddMessage}>
        <SendIcon />
      </SendButton>
    </Container>
  );
};

export default InputBar;
