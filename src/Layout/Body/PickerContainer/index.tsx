import { Box } from "@mui/material";

import PickerWindow from "./PickerWindow";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import LastStep from "./LastStep";
import DefaultButton from "./../../../components/DefaultButton";

// confirmで同じスタイルあり（import?）
const styles = {
  bottomBtnWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "13px",
    margin: "0 0 11px"
  }
};

const PickerContainer: React.FC = () => {
  const handleClick = () => {
    // ダミー
  };

  return (
    <>
      <p>PickerContainer/index</p>
      <PickerWindow />
      <Box sx={{ outline: "3px double black" }}>
        <DatePicker />
        <Box sx={styles.bottomBtnWrapper}>
          <DefaultButton
            Style="Secondary"
            text="閉じる"
            onClick={handleClick}
          />
          <DefaultButton
            Style="Commit"
            text="日付を決定"
            onClick={handleClick}
          />
        </Box>
      </Box>
      <Box sx={{ outline: "3px double black" }}>
        <TimePicker />
        <Box sx={styles.bottomBtnWrapper}>
          <DefaultButton Style="Secondary" text="戻る" onClick={handleClick} />
          <DefaultButton
            Style="Commit"
            text="時間を決定"
            onClick={handleClick}
          />
        </Box>
      </Box>

      <Box sx={{ outline: "3px double black" }}>
        <LastStep />
        <Box sx={styles.bottomBtnWrapper}>
          <DefaultButton Style="Secondary" text="戻る" onClick={handleClick} />
          <DefaultButton Style="Commit" text="登録する" onClick={handleClick} />
        </Box>
      </Box>
    </>
  );
};

export default PickerContainer;
