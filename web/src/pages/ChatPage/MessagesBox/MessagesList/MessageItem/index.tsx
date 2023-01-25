import React, { FunctionComponent } from "react";
import { ChatMessage } from "../../../../../common/types/chatMessage";
import Container from "./styles/Container";

type MessageItemProps = {
  item: ChatMessage;
};

const MessageItem: FunctionComponent<MessageItemProps> = ({ item }) => {
  return (
    <Container sx={{ backgroundColor: "secondary.main" }}>
      {item.message}
    </Container>
  );
};

export default MessageItem;
