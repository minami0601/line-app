import React, { useContext, useState } from "react";
import { Box, Typography } from "@mui/material";

import icon from "./img/icon.svg";
import DefaultButton from "./components/DefaultButton";
import NestedModal from "./Layout/ModalWin";
import Context from "./context";
import Layout from "./Layout";

const styles = {
  confirmTitleWrapper: {
    bgcolor: "#FFFDF1",
    width: "calc(100% + 70px)",
    margin: "0 -35px 14px",
    padding: "12px 35px"
  },
  confirmTitle: {
    display: "flex",
    justifyContent: "center",
    bgcolor: "#FFD853",
    color: "#707070",
    fontSize: "18px",
    fontWeight: "600",
    width: "100%",
    padding: "15px 0",
    textAlign: "center",
    borderRadius: "7px"
  },
  confirmBg: {
    padding: "0 35px",
    color: "#707070"
  },
  confirmIcon: {
    width: "20px",
    margin: "0 8px 0 0"
  },
  textTitle: {
    fontSize: "18px",
    fontWeight: "600"
  },
  mainText: {
    fontSize: "16px",
    fontWeight: "600",
    bgcolor: "#FFFDF1",
    width: "100%",
    padding: "10px 11px",
    border: "1px solid #707070",
    margin: "9px 0 11px"
  },
  bottomPart: {
    bgcolor: "#FFFDF1",
    width: "calc(100% + 70px)",
    margin: "0 -35px 0",
    padding: "12px 35px 20px"
  },
  note: {
    fontSize: "15px",
    width: "calc(100% + 70px)",
    margin: "0 -35px",
    padding: "13px 35px 15px",
    fontWeight: "600"
  },
  bottomBtnWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "13px",
    margin: "0 0 11px"
  }
};

const Confirm: React.FC = () => {
  const { isOn, setIsOn } = useContext(Context);
  // console.log("isOn", isOn);
  const handleClickChange = () => {
    setIsOn(false); // true:確認画面、false:登録画面
  };
  const handleClickCancel = () => {
    // ダミー
  };
  const handleClickClose = () => {
    // ダミー
  };

  return (
    <>
      <Box sx={styles.confirmBg}>
        <Box sx={styles.confirmTitleWrapper}>
          <Typography sx={styles.confirmTitle}>
            <img style={styles.confirmIcon} src={icon} alt="" />
            予約確認
          </Typography>
        </Box>
        <Box>
          <Typography sx={styles.textTitle}>予約患者名</Typography>
          <Typography sx={styles.mainText}>山田涼介</Typography>
        </Box>
        <Box>
          <Typography sx={styles.textTitle}>電話番号</Typography>
          <Typography sx={styles.mainText}>09012345678</Typography>
        </Box>
        <Box>
          <Typography sx={styles.textTitle}>予約日時</Typography>
          <Typography sx={styles.mainText}>2022年8月8日（月）15:50</Typography>
        </Box>
        <Box>
          <Typography sx={styles.textTitle}>病院への連絡事項</Typography>
          <Typography sx={styles.mainText}>
            連絡事項が入ります。ここに連絡事項が入ります。
            連絡事項が入ります。ここに連絡事項が入ります。
            連絡事項が入ります。ここに連絡事項が入ります。
            連絡事項が入ります。ここに連絡事項が入ります。
          </Typography>
        </Box>
        <Box sx={styles.bottomPart}>
          <Typography sx={styles.note}>
            ※予約時間までに来院されていない場合、
            予約は無効となり、診察は受付順となります。
          </Typography>
          <Box sx={styles.bottomBtnWrapper}>
            <DefaultButton
              Style="Primary"
              text="変更"
              onClick={handleClickChange}
            />
            {/* <DefaultButton
              Style="Primary"
              text="取り消し"
              onClick={handleClickCancel}
            /> */}
            <NestedModal />
          </Box>
          <DefaultButton
            Style="CloseBig"
            text="閉じる"
            onClick={handleClickClose}
          />
        </Box>
      </Box>
    </>
  );
};

export default Confirm;
