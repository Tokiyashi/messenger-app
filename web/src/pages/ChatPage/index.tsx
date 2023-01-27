import React, { FunctionComponent, useContext } from "react";
import PageContainer from "../styles/PageContainer";
import { Button } from "@mui/material";
import InputBar from "./InputBar";
import MessagesBox from "./MessagesBox";
import { Context } from "../../main";
import firebase from "firebase/compat";
import User = firebase.User;
import Header from "../../components/Header";

type ChatPageProps = {
  user: User;
};
const ChatPage: FunctionComponent<ChatPageProps> = ({ user }) => {
  const { firestore } = useContext(Context);

  const handleDelete = async () => {
    await firestore
      .collection("messages")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => doc.ref.delete());
      });
  };

  return (
    <PageContainer>
      <Header />
      <Button onClick={handleDelete}> Delete </Button>
      <MessagesBox user={user} />
      <InputBar user={user} />
    </PageContainer>
  );
};

export default ChatPage;
