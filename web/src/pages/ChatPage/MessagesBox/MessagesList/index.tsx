import React, {FunctionComponent, useContext} from "react";
import { ChatMessage } from "../../../../common/types/chatMessage";
import MessageItem from "./MessageItem";
import Container from "./styles/Container";
import ItemsWrapper from "./styles/ItemsWrapper";
import {Context} from "../../../../App";
import firebase from "firebase/compat";
import User = firebase.User;

type MessagesListProps = {
  messages: ChatMessage[];
  user: User;
};

const MessagesList: FunctionComponent<MessagesListProps> = ({ messages, user }) => {

  const messageItems = messages.map((item, index) => (
    <MessageItem
      isMe={item.uid === user.uid}
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
