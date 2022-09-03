import * as React from "react";
import { Box, Modal, Button } from "@mui/material";

const styles = {
  modalBtnWrapper: {
    display: "flex",
    gap: "13px",
    margin: "42px auto"
  },
  modalMain: {
    fontSize: "20px",
    color: "#707070",
    width: "362px",
    height: "395px",
    textAlign: "center",
    borderRadius: "19px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    // border: "1px solid #000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  modalBtn: {
    width: "148px",
    height: "48px",
    fontSize: "18px",
    color: "#707070",
    background: "linear-gradient(to bottom, #FCD453, #FFC200)"
  },
  modalCloseBtn: {
    width: "148px",
    height: "48px",
    fontSize: "18px",
    color: "#707070",
    background: "linear-gradient(to bottom, #FCFCFC, #EFEFEF)",
    border: "1px solid #000",
    margin: "30px auto"
  }
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box sx={styles.modalBtnWrapper}>
        <Button onClick={handleOpen} sx={{ ...styles.modalBtn }}>
          はい
        </Button>
        <Button onClick={handleClose} sx={{ ...styles.modalBtn }}>
          いいえ
        </Button>
      </Box>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={{ ...styles.modalMain }}>
          <h2 id="child-modal-title">予約を取り消しました</h2>
          <Button onClick={handleClose} sx={{ ...styles.modalCloseBtn }}>
            閉じる
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          width: "173px",
          height: "48px",
          fontSize: "20px",
          color: "#707070",
          background: "linear-gradient(to bottom, #FCD453, #FFC200)"
        }}
      >
        取り消し
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...styles.modalMain }}>
          <h2 id="parent-modal-title">予約を取り消しますか？</h2>
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
