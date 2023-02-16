import React from "react";
import PageContainer from "../styles/PageContainer";
import FlexContainer from "../styles/FlexContainer";
import ChatWindow from "../styles/ChatWindow";
import Header from "../../widgets/Header";
import InputBar from "./InputBar";
import Sidebar from "../../widgets/Sidebar";
import DirectBox from "../../widgets/DirectBox";

const DirectPage = () => {
  return (
    <PageContainer>
      <FlexContainer>
        <Sidebar />
        <ChatWindow>
          <Header />
          <DirectBox />
          <InputBar />
        </ChatWindow>
      </FlexContainer>
    </PageContainer>
  );
};

export default DirectPage;