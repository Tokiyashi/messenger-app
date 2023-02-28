import { Box, styled } from "@mui/material";


type ContainerProps = {
  isOpen: boolean;
};

const Container = styled(Box)`
  display: ${({isOpen}: ContainerProps) => (isOpen ? "block" : "none")};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export default Container;