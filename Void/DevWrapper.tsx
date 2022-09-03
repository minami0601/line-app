// import { useState } from "react";
// import Switch from "@mui/material/Switch";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";

// import App from "./App";

// type Props = {
//   children: React.ReactElement;
// };

// const DevWrapper: React.FC<Props> = ({ children }) => {
//   const [test, setTest] = useState<boolean>(false);
//   const handleChange = () => {
//     setTest(!test);
//   };

//   return (
//     <>
//       <Stack ml={2} direction="row" spacing={1} alignItems="center">
//         <Typography>Question</Typography>
//         <Switch onChange={handleChange} />
//         <Typography>Result</Typography>
//       </Stack>
//       {test ? children : <App />}
//     </>
//   );
// };

// export default DevWrapper;
