import React, { FunctionComponent } from "react";
import Container from "./styles/Container";
import { useNavigate } from "react-router-dom";
import { User } from "../../../../shared/types/User";
import { Typography } from "@mui/material";
import { useFetchDirectMessages } from "../../../Message/model/hooks/fetchDirectMessages";
import TextBlock from "./styles/TextBlock";
import UserAvatar from "./styles/userAvatar";
import dateFormat from "dateformat";
import LastMessage from "./styles/LastMessage";
import SmallTimeText from "../../../../shared/ui/SmallTimeText";
import { useAppSelector } from "../../../../shared/hooks/redux";
import BookIcon from "@mui/icons-material/Book";

type UserItemProps = {
  item: User;
};

const UserItem: FunctionComponent<UserItemProps> = ({ item }) => {
  const navigate = useNavigate();
  const MAX_MESSAGE_SIZE = 12;
  const { user } = useAppSelector((state) => state.userReducer);

  const handleNavigate = () => {
    navigate(`/direct/${item.uid}`);
  };

  const messages = useFetchDirectMessages(item.uid);
  const lastMessage = messages[messages.length - 1];
  const cutText = `${lastMessage?.message.slice(0, MAX_MESSAGE_SIZE)}${
    lastMessage?.message.length > MAX_MESSAGE_SIZE ? "..." : ""
  }`;

  const isMe = user && item.uid === user.uid;

  return (
    <Container onClick={handleNavigate}>
      {isMe ? (
        <BookIcon sx={{ width: 60, height: 60 }} />
      ) : (
        <UserAvatar sx={{ width: 60, height: 60 }} src={item.photoURL} />
      )}
      <TextBlock>
        <Typography color="white" textTransform="none" textAlign="left">
          {isMe ? "Saved Messages" : item.displayName}
        </Typography>
        {!!messages.length && (
          <LastMessage>
            <Typography textTransform="none" variant="subtitle1" color="grey">
              {cutText || ""}
            </Typography>
            <SmallTimeText color="grey">
              {dateFormat(lastMessage.createdAt, "shortTime")}
            </SmallTimeText>
          </LastMessage>
        )}
      </TextBlock>
    </Container>
  );
};

export default UserItem;
