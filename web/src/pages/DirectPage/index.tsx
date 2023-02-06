import React from "react";
import PageContainer from "../styles/PageContainer";
import FlexContainer from "../styles/FlexContainer";
import ChatWindow from "../styles/ChatWindow";
import Header from "../../components/Header";
import InputBar from "./InputBar";
import MessagesBox from "./MessagesBox";
import Sidebar from "../../components/Sidebar";

const DirectPage = () => {
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

export default DirectPage;
