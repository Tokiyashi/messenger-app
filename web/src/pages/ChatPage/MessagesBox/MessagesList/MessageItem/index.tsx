import React, { FunctionComponent, useState } from "react";
import { ChatMessage } from "../../../../../common/types/chatMessage";
import Container from "./styles/Container";
import { Avatar, Typography } from "@mui/material";
import Wrapper from "./styles/Wrapper";
import { userService } from "../../../../../services/UserService";
import useAsyncEffect from "use-async-effect";
import MessageAndInfo from "./styles/MessageAndInfo";
import { useAppSelector } from "../../../../../utils/hooks/redux";

type MessageItemProps = {
  item: ChatMessage;
};

const MessageItem: FunctionComponent<MessageItemProps> = ({ item }) => {
  const [fetchedUser, setFetchedUser] = useState<any | undefined>();
  const { user } = useAppSelector((state) => state.userReducer);

  useAsyncEffect(async () => {
    const result = await userService.getUserByUid(item.uid);
    setFetchedUser(result);
  }, []);

  const isMe = user && user.uid === item.uid;
  const messagePosition = isMe ? "right" : "left";

  if (!fetchedUser) return <></>;

  return (
    <Wrapper pos={messagePosition}>
      <MessageAndInfo pos={messagePosition}>
        <Container
          pos={messagePosition}
          sx={{ backgroundColor: isMe ? "secondary.main" : "divider" }}
        >
          {item.message}
        </Container>
        <Typography textAlign="center">
          {fetchedUser && fetchedUser.displayName}
        </Typography>
      </MessageAndInfo>
      <Avatar src={fetchedUser && fetchedUser?.photoURL} />
    </Wrapper>
  );
};

export default MessageItem;
