import { Box, styled } from "@mui/material";

type WrapperProps = {
    pos: "left" | "right";
};

const MessageAndInfo = styled(Box)`
  align-items: ${({pos}: WrapperProps) => pos === 'left' ? 'flex-start' : 'flex-end'};
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
`;

export default MessageAndInfo;
