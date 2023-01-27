import React, {FunctionComponent} from "react";
import { ChatMessage } from "../../../../common/types/chatMessage";
import MessageItem from "./MessageItem";
import Container from "./styles/Container";
import ItemsWrapper from "./styles/ItemsWrapper";

type MessagesListProps = {
  messages: ChatMessage[];
};

const MessagesList: FunctionComponent<MessagesListProps> = ({ messages,  }) => {

  const messageItems = messages.map((item, index) => (
    <MessageItem
      key={index}
      item={item}
    />
  ));

  return (
    <Container>
      <ItemsWrapper>{messageItems}</ItemsWrapper>
    </Container>
  );
};

export default MessagesList;
