import React, {
  FunctionComponent,
  KeyboardEvent,
  useContext,
  useState,
} from "react";
import Container from "./styles/Container";
import firebase from "firebase/compat";
import SendIcon from "@mui/icons-material/Send";
import SendButton from "./styles/SendButton";
import { Context } from "../../../app/App";
import { useAppSelector } from "../../../shared/hooks/redux";
import StyledTextField from "./styles/StyledTextField";
import { useParams } from "react-router-dom";

const InputBar: FunctionComponent = () => {
  const { chatId } = useParams();
  const { user } = useAppSelector((state) => state.userReducer);
  const [value, setValue] = useState("");
  const { firestore } = useContext(Context);
  const handleAddMessage = async () => {
    setValue("");

    if (!value || !user || !chatId) {
      return;
    }
    const message = {
      message: value,
      uid: user.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      chatId,
    };
    await firestore.collection("messages").add(message);
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
