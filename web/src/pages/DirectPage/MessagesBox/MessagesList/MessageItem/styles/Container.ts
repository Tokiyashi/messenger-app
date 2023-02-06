import { Box, styled } from "@mui/material";

type WrapperProps = {
    pos: "left" | "right";
};

const Container = styled(Box)`
  padding: 1rem;
  border-radius: ${({pos}: WrapperProps) => pos === 'left' ? '1px 12px 12px 12px' : '12px 1px 12px 12px'};
  justify-content: center;
  align-items: center;
  height: 1rem;
  width: 100%;
`;

export default Container;
