import { Button } from "@mui/material";

type Props = {
  Style: string;
  text: string;
  onClick: () => void;
};

// 黄色のボタン
const StylePrimary = {
  maxWidth: "173px",
  width: "100%",
  height: "48px",
  fontSize: "20px",
  color: "#707070",
  background: "linear-gradient(to bottom, #FCD453 0%, #FFC200 100%)",
  boxShadow: "0px 3px 3px #00000029"
};

// Layoutの閉じるボタン
const StyleSecondary = {
  width: "173px",
  height: "48px",
  fontSize: "20px",
  color: "#707070",
  background:
    "linear-gradient(to bottom, #FFFFFF 0%, #FCFCFC 76%, #EFEFEF 100%)"
};

// ピンクのボタン
const StyleCommit = {
  position: "relative",
  maxWidth: "173px",
  width: "100%",
  minHeight: "48px",
  fontSize: "20px",
  pr: "1.38em",
  pl: "2em",
  color: "#FFFFFF",
  background: "linear-gradient(180deg, #FD9FA1 0%, #FC6E70 100%)",
  "&::before": {
    position: "absolute",
    content: "''",
    top: "50%",
    left: "10%",
    transform: "translateY(-50%)",
    borderStyle: "solid",
    borderWidth: "7px 0 7px 12px",
    borderColor: "transparent transparent transparent #fff"
  }
};

// confirmの下の閉じるボタン
const StyleCloseBig = {
  display: "block",
  maxWidth: "360px",
  width: "100%",
  height: "48px",
  fontSize: "20px",
  pr: "1.38em",
  pl: "2em",
  color: "#707070",
  background:
    "transparent linear-gradient(180deg, #FFFFFF 0%, #FCFCFC 76%, #EFEFEF 100%) 0% 0% no-repeat padding-box",
  boxShadow: "0px 3px 3px #00000029",
  borderRadius: "4px",
  marginRight: "auto",
  marginLeft: "auto"
};

const DefaultButton: React.FC<Props> = (props) => {
  let style = "";
  switch (props.Style) {
    case "Primary":
      style = StylePrimary;
      break;
    case "Secondary":
      style = StyleSecondary;
      break;
    case "Commit":
      style = StyleCommit;
      break;
    case "CloseBig":
      style = StyleCloseBig;
      break;
  }

  return (
    <>
      <Button onClick={props.onClick} sx={style}>
        {props.text}
      </Button>
    </>
  );
};

export default DefaultButton;

// cf. https://zenn.dev/yukiyohure/articles/32801c0c6bf147
