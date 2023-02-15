import React, { FunctionComponent } from "react";
import Container from "./styles/Container";
import MessagesList from "./MessagesList";
import { useFetchDirectMessages } from "../../../shared/hooks/fetchDirectMessages";
import { useParams } from "react-router-dom";

const MessagesBox: FunctionComponent = () => {
  const { companionId } = useParams();
  const messages = useFetchDirectMessages(companionId || "");

  return (
    <Container>
      <MessagesList messages={messages} />
    </Container>
  );
};

export default MessagesBox;
