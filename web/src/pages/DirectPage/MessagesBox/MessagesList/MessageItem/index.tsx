import React, { FunctionComponent, useState } from "react";
import { DirectMessage } from "../../../../../common/types/chatMessage";
import Container from "./styles/Container";
import { Avatar, Typography } from "@mui/material";
import Wrapper from "./styles/Wrapper";
import { userService } from "../../../../../services/UserService";
import useAsyncEffect from "use-async-effect";
import MessageAndInfo from "./styles/MessageAndInfo";
import { MessagePosition } from "../../../../../common/enums/MessagePositions";
import { useAppSelector } from "../../../../../utils/hooks/redux";
import { isNull } from "lodash";

type MessageItemProps = {
  item: DirectMessage;
};

const MessageItem: FunctionComponent<MessageItemProps> = ({ item }) => {
  const [fetchedUser, setFetchedUser] = useState<any | undefined>();
  const [isMe, setIsMe] = useState(false);
  const { user } = useAppSelector((state) => state.userReducer);

  useAsyncEffect(async () => {
    const result = await userService.getUserByUid(item.uid);
    if (!result) {
      return;
    }

    const checkIsMe: boolean = !isNull(user) && user.uid === item.uid;
    setIsMe(checkIsMe);
    setFetchedUser(result);
  }, [item]);

  const messagePosition = isMe ? MessagePosition.RIGHT : MessagePosition.LEFT;

  if (!fetchedUser) return <></>;

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
        <Typography textAlign="center">
          {fetchedUser && fetchedUser.displayName}
        </Typography>
      </MessageAndInfo>
      <Avatar src={fetchedUser && fetchedUser?.photoURL} />
    </Wrapper>
  );
};

export default MessageItem;
