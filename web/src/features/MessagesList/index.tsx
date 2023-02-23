import React, { FunctionComponent, useEffect, useRef } from "react";
import MessageItem from "../../entities/Message/ui/MessageItem";
import Container from "./styles/Container";
import ItemsWrapper from "./styles/ItemsWrapper";
import { Box } from "@mui/material";
import { DirectMessage } from "../../entities/Message/config/types";

type MessagesListProps = {
  messages: DirectMessage[];
};

const MessagesList: FunctionComponent<MessagesListProps> = ({ messages }) => {
  const messagesContainer = useRef<null | HTMLElement>();

  useEffect(() => {
    messagesContainer.current && messagesContainer.current.scrollIntoView();
  }, [messages]);

  const messageItems = messages.map((item, index) => (
    <MessageItem key={index} item={item} />
  ));

  return (
    <Container>
      <ItemsWrapper>
        {messageItems}
        <Box ref={messagesContainer} />
      </ItemsWrapper>
    </Container>
  );
};

export default MessagesList;
