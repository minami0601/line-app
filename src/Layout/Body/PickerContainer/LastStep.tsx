import { Box, Typography, TextField } from "@mui/material";
import React, { useState } from "react";

import DefaultButton from "./../../../components/DefaultButton";

const styles = {
  pickerBg: {
    padding: "16px 35px",
    color: "#707070"
  },
  textTitleBorder: {
    fontSize: "18px",
    fontWeight: "600",
    border: "1px solid #EDEDED",
    display: "inline-flex",
    margin: "6px 0 0",
    justifyContent: "center",
    width: "115px",
    padding: "7px 10px",
    borderRadius: "50px",
    background: "linear-gradient(to right, #FFFDF1 0% 50%, #ffffff 50% 100%)"
  },
  textTitle: {
    fontSize: "18px",
    fontWeight: "600",
    display: "inline-flex",
    margin: "6px 0 0"
  },
  required: {
    color: "#EF8B8B",
    fontSize: "16px",
    fontWeight: "600",
    marginLeft: "10px"
  },
  limit: {
    fontSize: "14px",
    fontWeight: "600",
    marginLeft: "10px"
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
  inputText: {
    fill: "pink",
    fontSize: "16px",
    fontWeight: "600",
    width: "100%",
    margin: "9px 0 11px",
    border: "1px solid #707070"
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
  }
};

const LastStep: React.FC = () => {
  const [str, setStr] = useState("Yamada");
  return (
    <>
      <Box sx={styles.pickerBg}>
        <Box>
          <Typography sx={styles.textTitleBorder}>予約患者名</Typography>
          <span style={styles.required}>必須</span>
          <TextField
            sx={styles.inputText}
            size="small"
            defaultValue={str}
            placeholder="山田涼介"
            type="name"
            onChange={(event) => setStr(event.target.defaultValue)}
          />
        </Box>
        <Box>
          <Typography sx={styles.textTitleBorder}>電話番号</Typography>
          <span style={styles.required}>必須</span>
          <TextField
            sx={styles.inputText}
            size="small"
            defaultValue=""
            placeholder="09012345678"
            type="tel"
          />
        </Box>
        <Box>
          <Typography sx={styles.textTitleBorder}>予約日時</Typography>
          <Typography sx={styles.mainText}>2022年8月8日（月）15:50</Typography>
        </Box>
        <Box>
          <Typography sx={styles.textTitle}>
            病院への連絡事項<span style={styles.limit}>※100文字以内</span>
          </Typography>
          <TextField
            sx={styles.inputText}
            multiline
            rows={5}
            defaultValue=""
            placeholder={""}
          />
        </Box>
        <Box sx={styles.bottomPart}>
          <Typography sx={styles.note}>
            ※予約時間までに来院されていない場合、
            予約は無効となり、診察は受付順となります。
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default LastStep;
