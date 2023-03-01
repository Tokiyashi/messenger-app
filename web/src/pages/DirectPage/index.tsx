import React from "react";
import PageContainer from "../styles/PageContainer";
import FlexContainer from "../styles/FlexContainer";
import ChatWindow from "../styles/ChatWindow";
import Header from "../../widgets/Header/ui";
import InputBar from "../../features/InputBar/ui";
import Sidebar from "../../widgets/Sidebar/ui";
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
