import React, { FC } from "react";
import PageContainer from "../styles/PageContainer";
import Header from "../../widgets/Header/ui";
import FlexContainer from "../styles/FlexContainer";
import ChatWindow from "../styles/ChatWindow";
import Sidebar from "../../widgets/Sidebar/ui";
import ChatBox from "../../widgets/DirectBox";
import InputBar from "../../features/InputBar/ui";

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
