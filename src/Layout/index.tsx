import { Box } from "@mui/material";
import Body from "./Body";
import Header from "./Header";

const Layout: React.FC = () => {
  return (
    <>
      <Box sx={{ outline: "3px double black" }}>
        <Header />
      </Box>
      <Body />
    </>
  );
};

export default Layout;
