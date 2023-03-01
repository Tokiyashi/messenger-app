import React, { FunctionComponent } from "react";
import Container from "./styles/Container";
import { useNavigate } from "react-router-dom";
import { User } from "../../model/types/User";
import { Typography } from "@mui/material";
import { useFetchDirectMessages } from "../../../Message/model/hooks/fetchDirectMessages";
import TextBlock from "./styles/TextBlock";
import UserAvatar from "./styles/userAvatar";
import dateFormat from "dateformat";
import LastMessage from "./styles/LastMessage";
import SmallTimeText from "../../../../shared/ui/SmallTimeText";
import BookIcon from "@mui/icons-material/Book";
import { useUser } from "../../model/hooks/user";

type UserItemProps = {
  item: User;
};

const UserItem: FunctionComponent<UserItemProps> = ({ item }) => {
  const navigate = useNavigate();
  const MAX_MESSAGE_SIZE = 12;
  const user = useUser((state) => state.user);

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
      {isMe ? <BookIcon /> : <UserAvatar src={item.photoURL} />}
      <TextBlock>
        <Typography
          sx={{ textOverflow: "ellipsis" }}
          color="text.primary"
          textTransform="none"
          textAlign="left"
        >
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
