import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./ChatPage";
import DirectPage from "./DirectPage";

const Pages: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:chatId" element={<ChatPage />} />
        <Route path="/*" element={<DirectPage />} />
        <Route path="/direct/:companionId" element={<DirectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
