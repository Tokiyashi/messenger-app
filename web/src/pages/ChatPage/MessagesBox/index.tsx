import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { Context } from "../../../main";
import { Query } from "@firebase/firestore-types";
import Container from "./styles/Container";
import firebase from "firebase/compat";
import User = firebase.User;
import { ChatMessage } from "../../../common/types/chatMessage";
import MessagesList from "./MessagesList";

type MessagesBoxProps = { user: User };

const MessagesBox: FunctionComponent<MessagesBoxProps> = ({ user }) => {
  const { firestore } = useContext(Context);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const query: Query = firestore
    .collection("messages")
    .orderBy("createdAt")
    .limitToLast(10);

  useEffect(() => {
    query.onSnapshot((querySnapshot) => {
      const items: ChatMessage[] = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data() as ChatMessage);
      });
      setMessages(items);
    });
  }, []);

  return (
    <Container>
      <MessagesList messages={messages} />
    </Container>
  );
};

export default MessagesBox;
