import React, { FunctionComponent, KeyboardEvent, useState } from "react";
import Container from "./styles/Container";
import SendIcon from "@mui/icons-material/Send";
import SendButton from "./styles/SendButton";
import StyledTextField from "./styles/StyledTextField";
import useAddNewMessage from "../model/useAddNewMessage";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { userService } from "../../../entities/User/model/UserService";
import useAsyncEffect from "use-async-effect";
import { User } from "../../../entities/User/model/types/User";

const InputBar: FunctionComponent = () => {
  const [value, setValue] = useState("");
  const [companion, setCompanion] = useState<User>();

  const createMessage = useAddNewMessage(value);
  const handleAddMessage = async () => {
    await createMessage();
    setValue("");
  };
  const { companionId } = useParams();

  const handleValueChange = (input: string) => {
    setValue(input);
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Enter") {
      await handleAddMessage();
    }
  };

  useAsyncEffect(async () => {
    const result = await userService.getUserByUid(companionId || "");
    if (!result) {
      return;
    }
    setCompanion(result);
  }, [companionId]);

  return (
    <Container sx={{ backgroundColor: "divider" }}>
      {companion ? (
        <>
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
        </>
      ) : (
        <Typography> Select a chat and start Messaging! </Typography>
      )}
    </Container>
  );
};

export default InputBar;
