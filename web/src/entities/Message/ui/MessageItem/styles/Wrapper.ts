import { Box, styled } from "@mui/material";
import { MessagePosition } from "../../../model/MessagePositions";

type WrapperProps = {
  pos: MessagePosition;
};

const Wrapper = styled(Box)`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: ${({ pos }: WrapperProps) => pos};
  flex-direction: ${({ pos }: WrapperProps) =>
    pos === MessagePosition.LEFT ? "row-reverse" : "row"};
`;
export default Wrapper;
