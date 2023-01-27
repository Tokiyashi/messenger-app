import React, {FC, useContext} from "react";
import PageContainer from "../styles/PageContainer";
import { Button } from "@mui/material";
import InputBar from "./InputBar";
import MessagesBox from "./MessagesBox";
import Header from "../../components/Header";
import {Context} from "../../App";


const ChatPage: FC = () => {
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
      <MessagesBox  />
      <InputBar  />
    </PageContainer>
  );
};

export default ChatPage;
