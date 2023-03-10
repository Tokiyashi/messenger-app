import { Paper, styled } from "@mui/material";

const PageContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  overflow-y: hidden;
  border-radius: 0;
`;

export default PageContainer;
