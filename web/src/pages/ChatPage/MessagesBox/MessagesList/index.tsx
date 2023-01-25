import React, { FunctionComponent } from "react";
import { ChatMessage } from "../../../../common/types/chatMessage";
import MessageItem from "./MessageItem";
import Container from "./styles/Container";

type MessagesListProps = {
  messages: ChatMessage[];
};

const MessagesList: FunctionComponent<MessagesListProps> = ({ messages }) => {
  const messageItems = messages.map((item, index) => (
    <MessageItem key={index} item={item} />
  ));

  return <Container>{messageItems}</Container>;
};

export default MessagesList;
