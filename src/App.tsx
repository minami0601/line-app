import { useContext } from "react";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";

import Layout from "./Layout";
import Confirm from "./Confirm";
import Context from "./context";

import "./styles.css";

const App: React.FC = () => {
  const { isOn, setIsOn } = useContext(Context);

  // const handleChange = () => {
  //   setIsOn(!isOn);
  // };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsOn(event.target.checked); // true:確認画面、false:登録画面
  };

  return (
    <>
      <Stack ml={2} direction="row" spacing={1} alignItems="center">
        <Typography>Layout</Typography>
        <Switch checked={Boolean(isOn)} onChange={handleChange} />
        <Typography>Confirm</Typography>
      </Stack>
      {isOn ? <Confirm /> : <Layout />}
    </>
  );
};

export default App;
