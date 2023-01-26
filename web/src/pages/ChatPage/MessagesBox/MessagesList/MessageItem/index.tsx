import React, { FunctionComponent } from "react";
import { ChatMessage } from "../../../../../common/types/chatMessage";
import Container from "./styles/Container";
import { Avatar } from "@mui/material";
import Wrapper from "./styles/Wrapper";
import AvatarContainer from "./styles/AvatarContainer";

type MessageItemProps = {
  item: ChatMessage;
};

const MessageItem: FunctionComponent<MessageItemProps> = ({ item }) => {
  return (
    <Wrapper>
      <Container sx={{ backgroundColor: "secondary.main" }}>
        {item.message}
      </Container>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
    </Wrapper>
  );
};

export default MessageItem;
