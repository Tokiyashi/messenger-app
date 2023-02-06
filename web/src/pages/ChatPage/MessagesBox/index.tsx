import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { Query } from "@firebase/firestore-types";
import Container from "./styles/Container";
import { ChatMessage } from "../../../common/types/chatMessage";
import MessagesList from "./MessagesList";
import { Context } from "../../../App";
import { useParams } from "react-router-dom";

const MessagesBox: FunctionComponent = () => {
  const { chatId } = useParams();

  const { firestore } = useContext(Context);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    if (!chatId) {
      return;
    }

    const query: Query = firestore
      .collection("messages")
      .where("chatId", "==", chatId)
      .orderBy("createdAt")
      .limitToLast(18);

    query.onSnapshot((querySnapshot) => {
      const items: ChatMessage[] = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data() as ChatMessage);
      });
      setMessages(items);
    });
  }, [chatId]);

  return (
    <Container>{chatId && <MessagesList messages={messages} />}</Container>
  );
};

export default MessagesBox;
