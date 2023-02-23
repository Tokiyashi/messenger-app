import React, { FunctionComponent, useState } from "react";
import { DirectMessage } from "../../config/types";
import Container from "./styles/Container";
import { Avatar, Typography } from "@mui/material";
import Wrapper from "./styles/Wrapper";
import { userService } from "../../../../shared/services/UserService";
import useAsyncEffect from "use-async-effect";
import MessageAndInfo from "./styles/MessageAndInfo";
import { MessagePosition } from "../../config/MessagePositions";
import { isNull } from "lodash";
import dateFormat from "dateformat";
import UserNameAndTime from "./styles/UserNameAndTime";
import { getFirstName } from "../../../User/helpers/getName";
import SmallTimeText from "../../../../shared/ui/SmallTimeText";
import { useUser } from "../../../User/model/hooks/user";

type MessageItemProps = {
  item: DirectMessage;
};

const MessageItem: FunctionComponent<MessageItemProps> = ({ item }) => {
  const [fetchedUser, setFetchedUser] = useState<any | undefined>();
  const user = useUser((state) => state.user);

  useAsyncEffect(async () => {
    const result = await userService.getUserByUid(item.uid);
    if (!result) {
      return;
    }
    setFetchedUser(result);
  }, [item]);

  const isMe: boolean = !isNull(user) && user.uid === item.uid;
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
        <UserNameAndTime>
          <SmallTimeText>
            {" "}
            {dateFormat(item.createdAt, "shortTime")}{" "}
          </SmallTimeText>
          <Typography textAlign="center">
            {fetchedUser && getFirstName(fetchedUser.displayName)}
          </Typography>
        </UserNameAndTime>
      </MessageAndInfo>
      <Avatar src={fetchedUser && fetchedUser?.photoURL} />
    </Wrapper>
  );
};

export default MessageItem;
