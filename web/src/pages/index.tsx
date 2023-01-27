import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./ChatPage";

const Pages: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
