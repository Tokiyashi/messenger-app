import { Box, styled } from "@mui/material";
import { MessagePosition } from "../../../model/MessagePositions";

type WrapperProps = {
  pos: MessagePosition;
};

const Container = styled(Box)`
  padding: 1rem;
  border-radius: ${({ pos }: WrapperProps) =>
    pos === MessagePosition.LEFT ? "1px 12px 12px 12px" : "12px 1px 12px 12px"};
  justify-content: center;
  align-items: center;
  min-height: 1rem;
  width: 100%;
  max-width: 40rem;
`;

export default Container;
