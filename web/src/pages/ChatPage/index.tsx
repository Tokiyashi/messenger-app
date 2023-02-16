import React, { FC } from "react";
import PageContainer from "../styles/PageContainer";
import InputBar from "./InputBar";
import Header from "../../widgets/Header";
import FlexContainer from "../styles/FlexContainer";
import ChatWindow from "../styles/ChatWindow";
import Sidebar from "../../widgets/Sidebar";
import ChatBox from "../../widgets/DirectBox";

const ChatPage: FC = () => {
  return (
    <PageContainer>
      <FlexContainer>
        <Sidebar />
        <ChatWindow>
          <Header />
          <ChatBox />
          <InputBar />
        </ChatWindow>
      </FlexContainer>
    </PageContainer>
  );
};

export default ChatPage;
