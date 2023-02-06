import React, { FC } from "react";
import PageContainer from "../styles/PageContainer";
import InputBar from "./InputBar";
import MessagesBox from "./MessagesBox";
import Header from "../../components/Header";
import FlexContainer from "../styles/FlexContainer";
import ChatWindow from "../styles/ChatWindow";
import Sidebar from "../../components/Sidebar";

const ChatPage: FC = () => {
  return (
    <PageContainer>
      <FlexContainer>
        <Sidebar />
        <ChatWindow>
          <Header />
          <MessagesBox />
          <InputBar />
        </ChatWindow>
      </FlexContainer>
    </PageContainer>
  );
};

export default ChatPage;
