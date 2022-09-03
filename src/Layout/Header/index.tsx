import { Box, Typography } from "@mui/material";
import StepperBase from "./StepperBase";
import logo from "../../img/logo.png";

const styles = {
  stepBackground: {
    background: "#FFFDF1 0% 0% no-repeat padding-box"
  },
  topWrapper: {
    display: "flex",
    padding: "8px 39px 8px 29px",
    mb: "5px",
    justifyContent: "space-between",
    alignItems: "center",
    bgcolor: "#fff"
  },
  headerLogo: {
    display: "block",
    width: "100px"
  },
  detailStep: {
    display: "block",
    fontSize: "16px",
    fontWeight: "600",
    color: "#707070"
  },
  detailText: {
    fontSize: "23px",
    fontWeight: "600",
    color: "#707070",
    margin: "10px",
    textAlign: "center"
  }
};

const Header: React.FC = () => {
  return (
    <>
      <Box sx={styles.stepBackground}>
        <Box sx={styles.topWrapper}>
          <img src={logo} alt="logo" style={styles.headerLogo} />
          <Typography sx={styles.detailStep}>STEP1 日付選択</Typography>
        </Box>
        <StepperBase />
        <Typography sx={styles.detailText}>
          希望の時間を選択してください
        </Typography>
      </Box>
    </>
  );
};

export default Header;
