import { Box, styled } from "@mui/material";

type WrapperProps = {
    pos: "left" | "right";
};

const Wrapper = styled(Box)`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: ${({pos}: WrapperProps) => pos};
  flex-direction: ${({pos}: WrapperProps) => pos === 'left' ? 'row-reverse' : 'row'};
`;
export default Wrapper;
