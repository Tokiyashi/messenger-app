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
import { Context } from "../../../App";
import { useAppSelector } from "../../../utils/hooks/redux";
import StyledTextField from "./styles/StyledTextField";
import { useParams } from "react-router-dom";

const InputBar: FunctionComponent = () => {
  const { companionId } = useParams();
  const { user } = useAppSelector((state) => state.userReducer);
  const [value, setValue] = useState("");
  const { firestore } = useContext(Context);
  const handleAddMessage = async () => {
    setValue("");

    if (!value || !user || !companionId) {
      return;
    }
    const message = {
      receiverId: companionId,
      message: value,
      uid: user.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
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
