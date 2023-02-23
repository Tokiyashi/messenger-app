import React, { FunctionComponent } from "react";
import { DirectMessage } from "../../config/types";
import Container from "./styles/Container";
import { Avatar, Typography } from "@mui/material";
import Wrapper from "./styles/Wrapper";
import MessageAndInfo from "./styles/MessageAndInfo";
import { MessagePosition } from "../../config/MessagePositions";
import { isNull } from "lodash";
import dateFormat from "dateformat";
import UserNameAndTime from "./styles/UserNameAndTime";
import { getFirstName } from "../../../User/helpers/getName";
import SmallTimeText from "../../../../shared/ui/SmallTimeText";
import { useUser } from "../../../User/model/hooks/user";
import { User } from "../../../User/model/types/User";

type MessageItemProps = {
  item: DirectMessage;
  sender: User | undefined;
};

const MessageItem: FunctionComponent<MessageItemProps> = ({ item, sender }) => {
  const user = useUser((state) => state.user);

  const isMe: boolean = !isNull(user) && user.uid === item.uid;
  const messagePosition = isMe ? MessagePosition.RIGHT : MessagePosition.LEFT;

  if (!sender) return <></>;

  return (
    <Wrapper pos={messagePosition}>
      <MessageAndInfo pos={messagePosition}>
        <Container
          pos={messagePosition}
          sx={{ backgroundColor: isMe ? "primary.main" : "divider" }}
        >
          <Typography color={isMe ? "primary.contrastText" : "white"}>
            {item.message}
          </Typography>
        </Container>
        <UserNameAndTime>
          <SmallTimeText>
            {" "}
            {dateFormat(item.createdAt, "shortTime")}{" "}
          </SmallTimeText>
          <Typography textAlign="center">
            {sender && getFirstName(sender.displayName)}
          </Typography>
        </UserNameAndTime>
      </MessageAndInfo>
      <Avatar src={sender && sender?.photoURL} />
    </Wrapper>
  );
};

export default MessageItem;
