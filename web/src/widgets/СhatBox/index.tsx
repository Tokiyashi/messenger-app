import React, { FunctionComponent } from "react";
import Container from "./styles/Container";
import { useFetchDirectMessages } from "../../entities/Message/model/hooks/fetchDirectMessages";
import { useParams } from "react-router-dom";
import MessagesList from "../../features/MessagesList";

const ChatBox: FunctionComponent = () => {
  const { companionId } = useParams();
  const messages = useFetchDirectMessages(companionId || "");

  return (
    <Container>
      <MessagesList messages={messages} />
    </Container>
  );
};

export default ChatBox;
