import { Box, Stepper, Step, StepLabel } from "@mui/material";

const steps = ["日付選択", "時間選択", "予約登録"];

const StepperBase: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperBase;
