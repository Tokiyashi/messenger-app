import React from 'react';
import PageContainer from "../styles/PageContainer";
import {Button} from "@mui/material";
import InputBar from "./InputBar";
import MessagesBox from "./MessagesBox";

const ChatPage = () => {
    return (
        <PageContainer>
            <MessagesBox/>
            <Button color='secondary' variant='contained'>Button</Button>
            <InputBar/>
        </PageContainer>
    );
};

export default ChatPage;