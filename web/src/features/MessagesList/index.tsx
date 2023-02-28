import React, {
  FunctionComponent,
  ReactElement,
  useRef,
  useState,
} from "react";
import MessageItem from "../../entities/Message/ui/MessageItem";
import Container from "./styles/Container";
import ItemsWrapper from "./styles/ItemsWrapper";
import { Box } from "@mui/material";
import { DirectMessage } from "../../entities/Message/config/types";
import useAsyncEffect from "use-async-effect";
import { userService } from "../../shared/services/UserService";

type MessagesListProps = {
  messages: DirectMessage[];
};

const MessagesList: FunctionComponent<MessagesListProps> = ({ messages }) => {
  const messagesContainer = useRef<null | HTMLElement>();
  const [items, setItems] = useState<ReactElement[]>([]);

  const getMessages = async () =>
    await Promise.all(
      messages.map(async (item, index) => {
        const sender = await userService.getUserByUid(item.uid);
        return <MessageItem sender={sender} key={index} item={item} />;
      })
    );

  useAsyncEffect(async () => {
    const messageItems = await getMessages();
    setItems(messageItems);

    messagesContainer.current && messagesContainer.current.scrollIntoView();
  }, [messages]);

  return (
    <Container>
      <ItemsWrapper>
        {!!messages.length && items}
        <Box ref={messagesContainer} />
      </ItemsWrapper>
    </Container>
  );
};

export default MessagesList;
