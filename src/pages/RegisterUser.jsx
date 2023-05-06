import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonalDetails from "../components/userregistration/PersonalDetails";
import ContactDetails from "../components/userregistration/ContactDetails";
import ProfessionalDetails from "../components/userregistration/ProfessionalDetails";
import ReviewForm from "../components/userregistration/ReviewForm";
import { validationSchema } from "../components/validation/UserValidation";


//some styling
const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minHeight: "25vh"
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
}));

function getStepContent(step, defaultValues) {
  switch (step) {
    case 0:
      return <PersonalDetails {...{defaultValues}}/>;
    case 1:
      return <ContactDetails {...{defaultValues}}/>;
    case 2:
      return <ProfessionalDetails {...{defaultValues}}/>;
    case 3:
      return <ReviewForm/>;
    default:
      return <div>404: Page Not Found</div>;
  }
}

const  RegisterUser = () =>{
  const {state} = useLocation();
  const defaultValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    job: "",
    gender: "male",
    ...state
  };
  
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Personal Details", "Contact Details", "Professional Details", "Review"];

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    alert(JSON.stringify(data));
    handleNext();
  };

  const currentValidationSchema = validationSchema[activeStep];
  const methods = useForm({
    shouldUnregister: false,
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: "onChange"
  });
  const { handleSubmit, reset, trigger, register, watch } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    reset();
  };

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper} elevation={1}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div style={{ minHeight: "50%" }}>
          {activeStep === steps.length ? (
            <>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </>
          ) : (
            <FormProvider {...methods}>
              <form>
                <div className={classes.instructions}>
                  {getStepContent(activeStep, defaultValues)}
                </div>
                <Box
                  display="flex"
                  justifyContent="center"
                  style={{ paddingTop: "5vh" }}
                >
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit(onSubmit)}
                      className={classes.button}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </form>
            </FormProvider>
          )}
        </div>
      </Paper>
    </main>
  );
}

export default RegisterUser;