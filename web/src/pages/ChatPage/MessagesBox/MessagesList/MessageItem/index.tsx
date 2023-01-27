import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChatMessage } from "../../../../../common/types/chatMessage";
import Container from "./styles/Container";
import { Avatar, Typography } from "@mui/material";
import Wrapper from "./styles/Wrapper";
import { Context } from "../../../../../main";
import { userService } from "../../../../../services/UserService";
import firebase from "firebase/compat";
import useAsyncEffect from "use-async-effect";
import MessageAndInfo from "./styles/MessageAndInfo";

type MessageItemProps = {
  item: ChatMessage;
};

const MessageItem: FunctionComponent<MessageItemProps> = ({ item }) => {
  const { firestore, firebase, auth } = useContext(Context);
  const [user, setUser] = useState<any | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  useAsyncEffect(async () => {
    const result = await userService.getUserByUid(item.uid);
    setUser(result);
  }, []);

  return (
    <Wrapper>
      <MessageAndInfo>
        <Container sx={{ backgroundColor: "secondary.main" }}>
          {item.message}
        </Container>
        <Typography> {user && user.displayName} </Typography>
      </MessageAndInfo>
      <Avatar />
    </Wrapper>
  );
};

export default MessageItem;
