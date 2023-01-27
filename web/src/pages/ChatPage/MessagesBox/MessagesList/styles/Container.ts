import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 2rem 4rem;
  margin-bottom: 2rem;
  overflow: auto;
  overflow-block: scroll;
  max-height: 60vh;
  height: 60vh;
`;
export default Container;
